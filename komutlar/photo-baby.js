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

let replies = ["https://media.discordapp.net/attachments/699339102989844500/820675937779712010/20210314_181227.jpg","https://media.discordapp.net/attachments/699339102989844500/820697238282960906/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg","https://media.discordapp.net/attachments/699339102989844500/821735124734967838/image0.jpg","https://media.discordapp.net/attachments/699339102989844500/821806014592188446/754b1ff56b7ab8cbc53e359a82145991.jpg","https://media.discordapp.net/attachments/699339102989844500/822819958425256006/2a2aa788874b5851dc43488bda380a88.png","https://media.discordapp.net/attachments/699339102989844500/822467110038274058/816328241169825832-1.png","https://media.discordapp.net/attachments/699339102989844500/822373009503158272/87e1efda3f47ded9287e0324bb13db5b.jpg","https://media.discordapp.net/attachments/699339102989844500/821990484087799838/image0.jpg","https://media.discordapp.net/attachments/699339102989844500/821990491473313821/image0.jpg","https://media.discordapp.net/attachments/699339102989844500/821990447701688350/image0.jpg","https://media.discordapp.net/attachments/699339102989844500/820408884623573082/image3.jpg","https://media.discordapp.net/attachments/699339102989844500/820289165442809886/59c3c6fde646d13b9aa7dcd2f5da63a7.jpg","https://media.discordapp.net/attachments/699339102989844500/820244565298380800/6e435c39cd932b50690c009893642d99.jpg","https://media.discordapp.net/attachments/699339102989844500/820231922042404874/1566507703f9fa03b0b20cf24d630f57.jpg","https://media.discordapp.net/attachments/699339102989844500/819630333904289863/20201222_112714.png","https://media.discordapp.net/attachments/699339102989844500/818865308089188352/2175da8c72e1145512cf4c1d9c0cdc7a.png","https://media.discordapp.net/attachments/699339102989844500/817844530911903744/86a3e9c632ecac25500f934eecb33ee3.png","https://media.discordapp.net/attachments/699339102989844500/817371277765378058/cbc257c7e159807257915ed51bcb1c71.jpg","https://media.discordapp.net/attachments/699339102989844500/817371277512933426/cca2417a7668673ce24e4ae458f46625.jpg","https://media.discordapp.net/attachments/699339102989844500/815597592242552912/0779a1b54dfb9fee077cd73d6c26c6ff.jpg","https://media.discordapp.net/attachments/699339102989844500/815597371798454272/IMG_20201214_034615.jpg","https://media.discordapp.net/attachments/699339102989844500/815597389447823370/image0-1.png","https://media.discordapp.net/attachments/699339102989844500/815597244644327475/Screenshot_20201227-184920-2.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("BABY PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);

};    
}
  
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['baby-pp', 'baby-photo', 'baby-anime', 'baby-anime'],

  permLevel: 0

};

exports.help = {

  name: 'baby-foto',

  description: 'matador',

  usage: 'baby-foto'

};