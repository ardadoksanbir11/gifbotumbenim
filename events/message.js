const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const database1 = require("megadb");
const db = require("quick.db");
let server = new database1.crearDB("server");

module.exports = async message => {
  if (!message.guild) return;
  if (message.channel.type === "dm") return;
  let prefix =
    (await server.get(`prefix.${message.guild.id}`)) || ayarlar.prefix;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    if (cmd.conf.enabled === false) {
      if (
        !ayarlar.sahip2.includes(message.author.id) &&
        !ayarlar.sahip2.includes(message.author.id)
      ) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `<a:ReddetmekGif:824798230318546974> **Bu komut geçici bir süreliğine kapalıdır.**`
          )
          .setColor("RED");
        message.channel.send({ embed });
        return;
      }
    }

    client.channels.cache.get("823123156008042506").send(
      new Discord.MessageEmbed()
        .setTitle("Komut kullanıldı")
        .setColor("BLUE")
        .setThumbnail(
          message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
        )
        .setTimestamp()
        .setFooter(
          `${message.author.username}`,
          message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
        )
        .addField("Kullanılan Komut", "`" + cmd.help.name + "`")
        .addField("Kullanan Kişi", "`" + message.author.tag + "`")
        .addField("Kullanan Kişinin İdsi", "`" + message.author.id + "`")
    );



    if (cmd) {
      let bakım = await server.get("bakım");
      if (message.author.id !== ayarlar.sahip) {
        if (bakım) {
          return message.channel
            .send(
              new Discord.MessageEmbed()
                .setDescription(
                  `**<:ayar_gifbot:822919624210514000> Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.**\n\n <a:maviok:822924275526402058> **Lütfen Daha Sonra Tekrar Deneyin.**`
                )
                .setColor("BLUE")
                .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
               .setTimestamp()
                .setURL(`https://discord.gg/NFZpSfZ3Jc`)
                .setDescription(`**Destek Sunucumuza Katılarak Bakım İle İlgili Detaylı Bilgi Alabilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`)
                .setTitle("ŞU AN BAKIMDAYIZ", true)
               .setFooter(`${client.user.username}`, client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
                .setImage(
                  "https://www.kusadasiuygulamaoteli.com/v2/images/yapim-asamasi.gif"
                )
            )
           
            }}
      }
    }
    const emoji = ["830581563519139852"];
    let ne = db.fetch(`kural_${message.author.id}`);
    if (ne === null)
      return message.channel
        .send(
          new Discord.MessageEmbed().setTitle("GİF BOT - Kullanım Şartları")
            .setDescription(`
<a:boost:823222923364008027> **Bot Hakkında Kötü Söz Söylemek Yasaktır.**
<a:boost:823222923364008027> **Bottaki Göz Yorabilecek Emojilerden Oluşacak Sorunlardan Biz Sorumlu Değiliz.**
<a:boost:823222923364008027> **Botta Hata-Öneri Komutunu Boş Yere Kullanmak Yasaktır.**
<a:boost:823222923364008027> **Bota Özelden Gönderdiğiniz Foto,Dosya vs. Tamamen Sizin Sorumluluğunuzdadır.**

<a:maviok:822924275526402058> **Kullanım Şartlarını Kabul Etmek İçin <:tick:830581563519139852> Emojisine Basmanız Yeterlidir.**

`)
        )
        .then(async function(embed) {
          const emoji = ["830581563519139852"];
          const filter = (reaction, user) =>
            emoji.includes(reaction.emoji.id) && user.id === message.author.id;
          await embed.react(emoji[0]).catch(function() {});
          var reactions = embed.createReactionCollector(filter);
          reactions.on("collect", async function(reaction) {
            if (reaction.emoji.id === "830581563519139852") {
              await embed.reactions.removeAll();
              await db.set(`kural_${message.author.id}`, "nul");
              return embed.edit(
                new Discord.MessageEmbed().setDescription(
                  `<a:konfeti:826210614379937842> ${message.author} **Kullanım Şartlarını Kabul Ettiğiniz İçin Teşekkür Ederiz. Artık Botu Kullanabilirsiniz.**`
                )
              );
            }
          });
        });

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);

};
