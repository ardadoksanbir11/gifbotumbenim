const db = require("quick.db")
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new Discord.MessageEmbed()
     .setURL(`https://discord.gg/NFZpSfZ3Jc`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{

  if(message.author.id !== '852608798812012574') return message.channel.send("<a:mortatlikiz:824371309277478942> **Sen önce botun sahibi ol sonra bu komutu kullanırsın.**")
let prex = args[0]
  if (!prex) return message.channel.send('<a:maviok:822924275526402058> **Bir ID Girmen Gerekiyor.**')
const lewis = message.guild.member(prex)
  db.delete(`aşkım${prex}`, 'gold')
  
 await message.react("👍")
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["özel-al"],
  permLevel: 0
};
exports.help = {
  name: 'özel-kullanıcı-al',
  description: '[Lewise Özel Komut]',
  usage: 'premium-al <ID>'
};