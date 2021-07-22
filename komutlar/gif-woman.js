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

let girl = require('../woman.json');
let result = Math.floor((Math.random() * girl.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("WOMAN GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(girl[result]);

message.channel.send(gifembed);
}
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-woman','woman-gif','gifwoman','womangif','kadın'],

  permLevel: 0

};

exports.help = {

  name: 'woman',

  description: 'matador',

  usage: 'woman'

};