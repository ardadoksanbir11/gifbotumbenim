const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db")
let prefix = ayarlar.prefix
exports.run = async (client, message, args, msg) => {
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
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setImage('https://media.discordapp.net/attachments/824249618023841812/831900684038832128/standard_3.gif')
.setTimestamp()
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor('BLUE') 
.addField(`<a:yildiz:827488171695538196> \`!!gif\``,'**Gif Yardım Menüsünü Gösterir.**')
.addField(`<a:ayarlar:823222140110504046> \`!!photo\``,'**Photo Yardım Menüsünü Gösterir.**')
.addField(`<a:ziplayan_arda:825455606948823040> \`!!diğer\``,'**Diğer Yardım Menüsünü Gösterir.**')
.addField(`<a:zil:833284989201678336> \`!!uptime\``,'**Discord Botunuz İçin 7/24 Aktif Tutmasını Sağlayan Yardım Menüsünü Gösterir.**')

.addField(`<:link:829805882664550431> | Linkler`,`:white_small_square: [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=749677136406773902&scope=bot&permissions=8) \n :white_small_square: [Bota Oy Ver](https://top.gg/bot/749677136406773902/vote) \n :white_small_square: [Website](https://www.gif-bot.tk) \n :white_small_square: [Destek Sunucusu](https://discord.gg/NFZpSfZ3Jc)`)
message.channel.send({embed});
}
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'ardacanımsınya',
  usage: 'yardım'
};