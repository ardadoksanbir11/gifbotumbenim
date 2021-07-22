const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db")
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
.setDescription(`<a:gezegen:823222531325689926> \`!!sponsor\` **Sponsorumuzu Gösterir.**\n\n\ <a:gezegen:823222531325689926> \`!!sil\` **Belirttiğiniz Kadar Mesajı Siler**\n\n<a:gezegen:823222531325689926> \`!!oyverdim\` **Destek Sunucumuzda Özel Rol Verir.**\n\n<a:gezegen:823222531325689926> \`!!korona\` **Korona Türkiye Verilerini Gösterir.**\n\n<a:gezegen:823222531325689926> \`!!oylama\` **Oylama Yaparsınız**\n\n<a:gezegen:823222531325689926> \`!!ping\` **Botun Pingini Gösterir**\n\n<a:gezegen:823222531325689926> \`!!hata\` **Botta Bulduğunuz Hatayı Bildirirsiniz.**\n\n<a:gezegen:823222531325689926> \`!!öneri\` **Botun Gelişmesine Destek Olmak İçin Öneri Verebilirsiniz.**\n\n<a:gezegen:823222531325689926> \`!!istatistik\` **Botun İstatistiklerini Öğrenirsiniz**\n\n<a:gezegen:823222531325689926> \`!!sunucutanıt\` **Sunucuzunu Destek Sunucumuzda Tanıtır.**`)

.addField(`<:link:829805882664550431> | Linkler`,`:white_small_square: [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=749677136406773902&scope=bot&permissions=8) \n :white_small_square: [Bota Oy Ver](https://top.gg/bot/749677136406773902/vote) \n :white_small_square: [Website](https://www.gif-bot.tk) \n :white_small_square: [Destek Sunucusu](https://discord.gg/NFZpSfZ3Jc)`)

message.channel.send({embed});

}
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['diğer'],
permLevel: 0
};

exports.help = {
  name: 'yardım-diğer',
  description: 'ardacanımsınya',
  usage: 'bot'
};