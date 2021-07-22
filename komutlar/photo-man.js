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

let replies = ["https://media.discordapp.net/attachments/608711478496854019/823551874346909726/image0.jpg","https://media.discordapp.net/attachments/608711478496854019/823552115925450802/image0.jpg","https://media.discordapp.net/attachments/608711478496854019/823576679200456734/97c163ec8f7c65cbc911e19fb3062fb3.jpg","https://media.discordapp.net/attachments/608711478496854019/823576684565102633/97d1cbd949f50d5ee48151ad4c19f2ee.jpg","https://media.discordapp.net/attachments/608711478496854019/823590363264581652/3a9e4007da92bfec46eba86bd3ff709d.png","https://media.discordapp.net/attachments/608711478496854019/823594152096825374/4ac3b06708a61cab42ded6daad2e9aea.jpg","https://media.discordapp.net/attachments/608711478496854019/823594164460716072/7773f70b50056d66db2336e4beb9fc15.jpg","https://media.discordapp.net/attachments/608711478496854019/823594477192871936/2Q.png","https://media.discordapp.net/attachments/608711478496854019/823594561427079198/9k.png","https://media.discordapp.net/attachments/608711478496854019/823598377589669968/images.png","https://media.discordapp.net/attachments/608711478496854019/823609054047371324/51.png","https://media.discordapp.net/attachments/608711478496854019/823643326573445150/3aedb04900f345d0c0ee098a63566f7c.png","https://media.discordapp.net/attachments/608711478496854019/823646471327842345/62b1d0ffe0c2e6ca6a6733be71448564.jpg","https://media.discordapp.net/attachments/608711478496854019/823646471608991784/e115ff0598e07d72e32448b43e607c1a.jpg","https://media.discordapp.net/attachments/608711478496854019/823646472016887828/c4b89a891a7e0670cf989111e903937a.jpg","https://media.discordapp.net/attachments/608711478496854019/823646629516279839/04f8a474b829cc252e270322d1056461.png","https://media.discordapp.net/attachments/608711478496854019/823534776807981056/image0.jpg","https://media.discordapp.net/attachments/608711478496854019/823437590475571200/52bb12f4449e50f91719c928c8969556.png","https://media.discordapp.net/attachments/608711478496854019/823437517637419018/f3988bc2cfd6f696c63518a2b0ddaa36.jpg","https://media.discordapp.net/attachments/608711478496854019/823437499094532127/image8-1.jpg","https://media.discordapp.net/attachments/608711478496854019/823437475602759701/images_41.jpeg","https://media.discordapp.net/attachments/608711478496854019/823437381482315836/eqw-1.jpg","https://media.discordapp.net/attachments/608711478496854019/823312056563662909/image0.jpg","https://media.discordapp.net/attachments/608711478496854019/823250546617483354/b2b751e4f901ed80bdeda5341958281b.jpg","https://media.discordapp.net/attachments/608711478496854019/823250469329043476/e248cc88d22dae7296c33f5dfaa7959a.jpg","https://media.discordapp.net/attachments/608711478496854019/823250438039011348/bec6be7f5711f76d561341205e78656f.jpg","https://media.discordapp.net/attachments/608711478496854019/823250156354535424/306bbf4c4feee4da8439fab1fdbd6f29.jpg","https://media.discordapp.net/attachments/608711478496854019/823249887310118912/1bbf3f52e2fdebcb8bdc3c78b0199d7f.jpg","https://media.discordapp.net/attachments/608711478496854019/823249672050049064/5cc99fc3e9758be8d467119815e6df17.jpg","https://media.discordapp.net/attachments/608711478496854019/823648342864822302/569cd1fa5338d241738564dc4facb142.png","https://media.discordapp.net/attachments/608711478496854019/823648365828636742/1172f2a566f9df208f5e9d1282d0afd5.png","https://media.discordapp.net/attachments/608711478496854019/823648129621426176/3eb6d39a03bf8d54acc046c438a2a220.jpg","https://media.discordapp.net/attachments/694694407278034944/823467306679271444/dda45a6a0c07b111f299fd337ac1550a.jpg","https://media.discordapp.net/attachments/694694407278034944/823467322110246982/e4e0b07bdbd6b312d8b5a9a084807477.png","https://media.discordapp.net/attachments/694694407278034944/823467447331323914/images_41.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("MAN PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);

};    

  
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['man-pp', 'man-photo', 'photo-man', 'foto-man'],

  permLevel: 0

};

exports.help = {

  name: 'man-foto',

  description: 'matador',

  usage: 'man-foto'

};