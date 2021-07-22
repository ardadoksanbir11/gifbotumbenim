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
let replies = ["https://media.discordapp.net/attachments/608711487325995008/823516151971446804/ccf9785959c1d345d4216fb47dcaf946.jpg","https://media.discordapp.net/attachments/608711487325995008/823516291960537098/indir_7.jpg","https://media.discordapp.net/attachments/608711487325995008/823569685886795806/40f8fb3c7d1f687c601df1370045f7d4.png","https://media.discordapp.net/attachments/608711487325995008/823571254316498954/e4001bf99706b9b0e03ad31c68aa813b.png","https://media.discordapp.net/attachments/608711487325995008/823571293613195264/8104c746528cfa7f3b3d5cd3458e9cdb.png","https://media.discordapp.net/attachments/608711487325995008/823571401822568524/Screenshot_90.png","https://media.discordapp.net/attachments/608711487325995008/823575909101469706/jabamiiii.jpg","https://media.discordapp.net/attachments/608711487325995008/823575981263421460/Shoto.jpg","https://media.discordapp.net/attachments/608711487325995008/823575996606316564/Shoto_Todoroki.jpg","https://media.discordapp.net/attachments/608711487325995008/823576033327317023/a1926a21ed33bd3f36bfd19bd3b22dbd.jpg","https://media.discordapp.net/attachments/608711487325995008/823576094875582525/1905778cf8b329d7b2891d3dae4ecaf1.jpg","https://media.discordapp.net/attachments/608711487325995008/823584598499000351/original.jpg","https://media.discordapp.net/attachments/608711487325995008/823612189456990219/b0c2794b6fc1b4ae87bc0b8c80f6a8e4.jpg","https://media.discordapp.net/attachments/608711487325995008/823612210311069766/unknown.png","https://media.discordapp.net/attachments/608711487325995008/823642219495817296/eb3a0b99c2eed88ae5fb5bf68bdd2df0.png","https://media.discordapp.net/attachments/608711487325995008/823651566296629278/40b19512bd1e2ccbe45e8ba2d871ba7d.png","https://media.discordapp.net/attachments/608711487325995008/823665404425404446/20210216_205331.jpg","https://media.discordapp.net/attachments/608711487325995008/823665405057957928/8f63112d0852a3ebc80cfe6c16af1ec4.png","https://media.discordapp.net/attachments/608711487325995008/823453980989849620/pain.png","https://media.discordapp.net/attachments/608711487325995008/823432660831436800/5027cf60a68fe15cd8fc5b058653ea43.jpg","https://media.discordapp.net/attachments/608711487325995008/823432554966679562/4541e99adeed75dae623ff508a8a5d19.jpg","https://media.discordapp.net/attachments/608711487325995008/823343397791334410/4f7c6cc89f9af780042946e70a5d1832.png","https://media.discordapp.net/attachments/608711487325995008/823324113544282192/4716e7d09e1e06409dafd773ead871ac.jpg","https://media.discordapp.net/attachments/608711487325995008/823313285251334185/a06fc17d3b7474dde526646625324122.jpg","https://media.discordapp.net/attachments/608711487325995008/823313261910949898/9cfcd0071f1b3dc1ac6e726ad36612f8.jpg","https://media.discordapp.net/attachments/608711487325995008/823286935220518942/6711fcb05020e517235a9d1d13cc340c.jpg","https://media.discordapp.net/attachments/608711487325995008/823286934616932352/9386abd3de7b8b8ed2d4ada26a9f9b90.jpg","https://media.discordapp.net/attachments/608711487325995008/823227687497498624/indir_2.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("ANİME PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);

};    

  
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['anime-pp', 'anime-photo', 'photo-anime', 'foto-anime'],

  permLevel: 0

};

exports.help = {

  name: 'anime-foto',

  description: 'matador',

  usage: 'anime-foto'

};