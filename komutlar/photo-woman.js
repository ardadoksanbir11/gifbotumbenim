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

let woman = require('../woman-photo.json');
let result = Math.floor((Math.random() * woman.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("WOMAN PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(woman[result]);

message.channel.send(gifembed);

};    

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['woman-pp', 'woman-photo', 'photo-woman', 'foto-woman'],

  permLevel: 0

};

exports.help = {

  name: 'woman-foto',

  description: 'matador',

  usage: 'woman-foto'

};