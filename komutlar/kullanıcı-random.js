const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
     if(message.author.id !== '852608798812012574')  return message.channel.send("<a:ReddetmekGif:824798230318546974> **Bu komut geçici bir süreliğine kapalıdır.**")
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
  if (kullanıcı == "aktif") {
    const userblacklist = new Discord.MessageEmbed()
      .setURL(`https://discord.gg/NFZpSfZ3Jc`)
      .setDescription(
        `**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`
      )
      .setTitle("Kara Listeye Alınmışsın", true)
      .setColor("BLUE")
      .setTimestamp()
      .setImage("https://i.gifer.com/3Q7h.gif")
      .setFooter(
        `${message.author.username}`,
        message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      );
    message.channel.send(userblacklist);
    const dcssanıl = client.users.cache
      .random()
      .avatarURL()
let result = Math.floor((Math.random() * dcssanıl.length));
    const a = new Discord.MessageEmbed()
      .setTimestamp()
      .setDescription("**GİF BOT**")
      .setFooter(
        `${message.author.username}`,
        message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setColor("BLUE")
      .setImage(dcssanıl[result]);
    message.channel.send(a);
  }
};
exports.conf = { enabled: true, 
guildOnly: false, 
aliases: [],
permLevel: 0
               }

exports.help = { name: "random-pp" 

               }
