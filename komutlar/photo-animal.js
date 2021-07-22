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

let replies = ["https://media.discordapp.net/attachments/608711490223996995/823152416454082560/f150d19d39f98fbdc3470f91ee6543a7.jpg","https://media.discordapp.net/attachments/608711490223996995/823152404480524328/28455e3f4b8d5c9a17a0af2421728790.jpg","https://media.discordapp.net/attachments/608711490223996995/823152494695153704/d01236e7d26b5ca50513b754cb3bb1ad.jpg","https://media.discordapp.net/attachments/608711490223996995/823152575813517312/bb0c4472ee0f79f88c1be8f5639781fa.jpg","https://media.discordapp.net/attachments/608711490223996995/823152851256999976/8771c69c47b6ae971700795516513aa5.jpg","https://media.discordapp.net/attachments/608711490223996995/823152932685611028/420f3f2485ccf756443c9890790649dd.jpg","https://media.discordapp.net/attachments/608711490223996995/823278425506185256/a35bfdd02982a96ded34542ee79b1882.png","https://media.discordapp.net/attachments/608711490223996995/823236862767267920/c73bc4ca9716f6f3afd05bb9d89292f9.jpg","https://media.discordapp.net/attachments/608711490223996995/823346236668510208/cafec11b7eb9ced4bf24c6b4c667104c.jpg","https://media.discordapp.net/attachments/608711490223996995/823576388421812234/1c578ce798e6af3e23340b52d03a905e.png","https://media.discordapp.net/attachments/608711490223996995/823576430666842122/b7d139c72e8c39241b7fc022c3efec39.png","https://media.discordapp.net/attachments/608711490223996995/823138465951645706/2Q.png","https://media.discordapp.net/attachments/608711490223996995/823137266942607390/images.png","https://media.discordapp.net/attachments/608711490223996995/823137214514987008/images.png","https://media.discordapp.net/attachments/608711490223996995/823137149670785024/images.png","https://media.discordapp.net/attachments/608711490223996995/823137122047098920/images.png","https://media.discordapp.net/attachments/608711490223996995/823108882888654878/80cfb33f08b9df0bbda9c63c9c976f17.jpg","https://media.discordapp.net/attachments/608711490223996995/823108261732417546/5403ad597c2dd9ffce148fcba037e450.jpg","https://media.discordapp.net/attachments/608711490223996995/819312990972674058/cute_cat.jpg","https://media.discordapp.net/attachments/608711490223996995/819248364566478868/f67195cd0544beeda16db6b46a033e69.jpg","https://media.discordapp.net/attachments/608711490223996995/819248101885476894/d105c38746d162a1c95ef928ad99b554.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("ANİMAL PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);

};    
}
  

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['animal-pp', 'animal-photo', 'photo-animal', 'foto-animal'],

  permLevel: 0

};

exports.help = {

  name: 'animal-foto',

  description: 'matador',

  usage: 'animal-foto'

};