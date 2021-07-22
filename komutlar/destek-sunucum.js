const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
exports.run = async(client, message, args) => {
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


const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcım", "<@485553705538551810>")

.setDescription(`**Destek Sunucumuza İçin Tıkla** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`) 
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor("BLUE")
.setTimestamp()
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

return message.channel.send(embed)

};
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['support-server','destek-sunucusu','destek-sunucu'],
  permLevel: 0,
};

exports.help = {
  name: 'destek-sunucum',
  description: 'castrum',
  usage: 'destek'
};//castrum