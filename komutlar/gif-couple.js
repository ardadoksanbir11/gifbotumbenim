const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
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

let couple = require('../couple.json');
let result = Math.floor((Math.random() * couple.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("COUPLE GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(couple[result]);

message.channel.send(gifembed);
}
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-couple','couple-gif','gifcouple','couplegif','sevgili'],

  permLevel: 0

};

exports.help = {

  name: 'couple',

  description: 'matador',

  usage: 'couple'

};