const discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const data = require("quick.db");
const ms = require("ms");
const http = require("http");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const app = express();
const Discord = require("discord.js");
const moment2 = require("moment-duration-format");
const client = new Discord.Client();
const moment = require("moment");
const chalk = require("chalk");
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OTY3NzEzNjQwNjc3MzkwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjM3NDYyfQ.Gjvb_KfVEwLxaExnmhBWCXotAo0lYhA4lkMPq3R4WGc') // https://top.gg/bot/BOTID/webhooks


setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size
  })
}, 1800000)

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
client.login(ayarlar.token);

//AYRIL KOMUTU

client.on("message", message => {
  if (message.author.id != "852608798812012574") return;
  if (message.content === "ayrıl") {
    client.guilds.cache.forEach((item, i) => {
      if (item.memberCount < 20) {
        item.leave();
      } else {
      }
    });
  }
});
//EKLENDİM ATILDIM

client.on("guildCreate", guild => {
  let kanal = client.channels.cache.find(r => r.id === "823114846345363486");
  const roles = guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString());
  let giriş = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`${guild.name} Adlı sunucuya eklendim!`)
    .setDescription(
      `
   ● **Sunucu Adı** => ${guild.name}
   ● **Sunucu ID** => ${guild.id}
   ● **Sunucu Üye Sayısı** => ${guild.memberCount}
   ● **Sunucu Sahip Bilgileri** => İD: ${guild.ownerID} - İsim: ${guild.owner}
   ● **Sunucu Bölgesi** => ${guild.region}
   ● **Sunucu Kurulum Tarihi** =>  ${moment(guild.createdTimestamp).format(
     "LT"
   )} ${moment(guild.createdTimestamp).format("LL")} ${moment(
        guild.createdTimestamp
      ).fromNow()}
   ● **Sunucu Üye Bilgileri** => Bot Sayısı: ${
     guild.members.cache.filter(member => member.user.bot).size
   } - Normal Üye Sayısı: ${
        guild.members.cache.filter(member => !member.user.bot).size
      } - Aktif Üye Sayısı: ${
        guild.members.cache.filter(
          member => member.presence.status === "online"
        ).size
      } - Kapalı Üye Sayısı: ${
        guild.members.cache.filter(
          member => member.presence.status === "offline"
        ).size
      } - Boştaki Üye Sayısı: ${
        guild.members.cache.filter(member => member.presence.status === "idle")
          .size
      } - Rahatsız Etmeyindeki Üye Sayısı: ${
        guild.members.cache.filter(member => member.presence.status === "dnd")
          .size
      }
   ● Toplamda: **${guild.memberCount}** kullanıcı bünyemize katıldı!
   ● Sunucu Sayım: **${
     client.guilds.cache.size
   }** - Kullanıcı Sayım: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}**
   `
    )
    .setFooter(client.user.username, client.user.avatarURL());
  kanal.send(giriş).catch(console.error);
});

client.on("guildDelete", guild => {
  let kanal = client.channels.cache.find(r => r.id === "823114846345363486");
  let çıkış = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`${guild.name} Adlı sunucudan atıldım!`)
    .setDescription(
      `
   ● **Sunucu Adı** => ${guild.name}
   ● **Sunucu ID** => ${guild.id}
   ● **Sunucu Üye Sayısı** => ${guild.memberCount}
   ● **Sunucu Sahip Bilgileri** => İD: ${guild.ownerID} - İsim: ${guild.owner}
   ● **Sunucu Bölgesi** => ${guild.region}
   ● **Sunucu Kurulum Tarihi** =>  ${moment(guild.createdTimestamp).format(
     "LT"
   )} ${moment(guild.createdTimestamp).format("LL")} ${moment(
        guild.createdTimestamp
      ).fromNow()}
   ● **Sunucu Üye Bilgileri** => Bot Sayısı: ${
     guild.members.cache.filter(member => member.user.bot).size
   } - Normal Üye Sayısı: ${
        guild.members.cache.filter(member => !member.user.bot).size
      } - Aktif Üye Sayısı: ${
        guild.members.cache.filter(
          member => member.presence.status === "online"
        ).size
      } - Kapalı Üye Sayısı: ${
        guild.members.cache.filter(
          member => member.presence.status === "offline"
        ).size
      } - Boştaki Üye Sayısı: ${
        guild.members.cache.filter(member => member.presence.status === "idle")
          .size
      } - Rahatsız Etmeyindeki Üye Sayısı: ${
        guild.members.cache.filter(member => member.presence.status === "dnd")
          .size
      }
   ● Toplamda: **${guild.memberCount}** kullanıcı eksildi!
   ● Sunucu Sayım: **${
     client.guilds.cache.size
   }** - Kullanıcı Sayım: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}**
   `
    )
    .setFooter(client.user.username, client.user.avatarURL());
  kanal.send(çıkış).catch(console.error);
});

//PREMİUM SİSTEMİ

client.on("message", async message => {
  if (
    message.content === "sa" ||
    message.content === "Sa" ||
    message.content === "Selamın Aleyküm" ||
    message.content === "selamın aleyküm" ||
    message.content === "sea" ||
    message.content === "Sea" ||
    message.content === "Selamun Aleyküm" ||
    message.content === "selamun aleyküm"
  ) {
    let gold = require("quick.db").fetch(`premium${message.author.id}`);
    if (gold === "gold") {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          "<a:yildiz:827488171695538196> **Bu Sunucuda Bir Premium Üye Belirdi!**"
        );
      message.channel.send(embed).then(x => x.delete({ timeout: 10000 }));
    } else {
      return;
    }
  }
});


//LEWİS ÖZEL
client.on("message", message => {
  if (
    message.content ===
    "yarranıgjwxejqwhewqhecJWEQJQEJjxeqwjxeqwjJXEWJQQJEWJxewjkjkqwexjkeqwJKXEWJQ"
  ) {
    let kanal = client.channels.cache.find(r => r.id === "833382188341919755");

let arda = new Discord.MessageEmbed()

kanal.send(arda)
.then(function(message) {

          message.react("824798196949188638")
} );
  }    
  }
); 




//BOTUN DMLER VE FOTOLARI
client.on("message", message => {
  let kanal = client.channels.cache.get("832266085968904222");
  if (message.channel.type !== "dm") return;
  if (message.attachments.size < 1) return;
  let embed = new Discord.MessageEmbed()
    .setThumbnail(
      message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
    )
    .setTimestamp()
    .setFooter(
      `${message.author.username} Adlı kişi bana resim yolladı.`,
      message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
    )
    .setColor("BLUE")
    .setImage(message.attachments.first().url);
  kanal.send(embed);
});
client.on("message", msg => {
  var dm = client.channels.cache.get("832268250778697778"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTimestamp()
      .setImage(
        "https://media.discordapp.net/attachments/824249618023841812/831900684038832128/standard_3.gif"
      )
      .setFooter(
        `${msg.author.username} `,
        msg.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setThumbnail(
        `${msg.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`
      )
      .addField(
        "<a:ziplayan_lewis:831954838279159838> **Gönderen Kullanıcı:** ",
        msg.author.tag
      )
      .addField(
        "<a:yildiz:827488171695538196> **Gönderen Kullanıcı ID:**",
        msg.author.id
      )
      .addField(
        "<a:boost:823222923364008027> **Gönderilen Mesaj:**",
        msg.content
      );

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});


//SAHİP HG MESAJI
client.on("message", async msg => {
  let i = ayarlar.sahip;
  if (msg.author.id == i)
    if (
      msg.content === "sa" ||
      msg.content === "Sa" ||
      msg.content === "Selamın Aleyküm" ||
      msg.content === "selamın aleyküm" ||
      msg.content === "sea" ||
      msg.content === "Sea" ||
      msg.content === "Selamun Aleyküm" ||
      msg.content === "selamun aleyküm"
    ) {
      msg.channel
        .send(
          "<a:ziplayan_lewis:831954838279159838> **Oooo Sahibim Lewis Bey Gelmiş Hoşgeldiniz Efendim Şeref Verdiniz.**"
        )
        .then(x => x.delete({ timeout: 30000 }));
    }
  {
    if (!i) return;
  }
});


//SUNUCUYA EKLENİNCE RASTGELE KANALA MESAJ
client.on('guildCreate', guild => {

    let lewis = guild.channels.cache.filter(c => c.type === "text").random()
    lewis.send("<a:zil:833284989201678336> Beni sunucunuza eklediğiniz için teşekkür ederim.\n<a:zil:833284989201678336> Eğer bir sorun ile karşılaşırsan destek sunucumuza katılabilirsin.\n<a:zil:833284989201678336> https://discord.gg/x3sBcTJ3PH");
});

//MUSA / PEACH HG MESAJI
client.on("message", async msg => {
  let i = "405371535306653696";
  if (msg.author.id == i)
    if (
      msg.content === "sa" ||
      msg.content === "Sa" ||
      msg.content === "Selamın Aleyküm" ||
      msg.content === "selamın aleyküm" ||
      msg.content === "sea" ||
      msg.content === "Sea" ||
      msg.content === "Selamun Aleyküm" ||
      msg.content === "selamun aleyküm"
    ) {
      msg.channel
        .send(
          "<a:bongocat:835170048166461440> Aleyküm selam hoşgeldiniz musa beyefendi, nasılsınız iyi misiniz?"
        )
        .then(x => x.delete({ timeout: 30000 }));
    }
  {
    if (!i) return;
  }
});

//MUSA / PEACH İYİ MESAJI
client.on("message", async msg => {
  let i = "405371535306653696";
  if (msg.author.id == i)
    if (
      msg.content === "ii" ||
      msg.content === "iyiyim" ||
      msg.content === "iyi" ||
      msg.content === "süperim" ||
      msg.content === "iyi sen"
    ) {
      msg.channel
        .send(
          "<a:bongocat:835170048166461440> İyi olmana sevindim."
        )
        .then(x => x.delete({ timeout: 30000 }));
    }
  {
    if (!i) return;
  }
});

//MUSA / PEACH KÖTÜYÜM MESAJI
client.on("message", async msg => {
  let i = "405371535306653696";
  if (msg.author.id == i)
    if (
      msg.content === "kötü" ||
      msg.content === "kötüyüm" ||
      msg.content === "kötüyüm sen" ||
      msg.content === "iyi değilim" ||
      msg.content === "üzgünüm" ||
      msg.content === "mutsuzum" ||
      msg.content === "ağlıyom" 
    ) {
      msg.channel
        .send(
          "<a:bongocat:835170048166461440> Kötü olmanıza üzüldüm, umarım her şey istediğiniz gibi olur."
        )
        .then(x => x.delete({ timeout: 30000 }));
    }
  {
    if (!i) return;
  }
});