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
  
let replies = ["https://media.discordapp.net/attachments/608711481969868811/823505899594580019/20210322_133501.jpg","https://media.discordapp.net/attachments/608711481969868811/823505940233715762/20210322_133409.jpg","https://media.discordapp.net/attachments/608711481969868811/823506253829373952/20210322_133309.jpg","https://media.discordapp.net/attachments/608711481969868811/823510243354869790/16008f66b201370c50f1c3fe4e96e9cc.png","https://media.discordapp.net/attachments/608711481969868811/823548251856699412/76e7b7b35aa44526b11a65275259aa8e.jpg","https://media.discordapp.net/attachments/608711481969868811/823548564424491039/a426cbeeadb9df099288080b7bee020e.png","https://media.discordapp.net/attachments/608711481969868811/823574952929132544/13452f623b631a8d71eab0f67ab5484f.jpg","https://media.discordapp.net/attachments/608711481969868811/823574988279644190/IMG_20200726_172011_729.jpg","https://media.discordapp.net/attachments/608711481969868811/823575009434927165/couple.jpg","https://media.discordapp.net/attachments/608711481969868811/823575035058323467/a6c753faa0b9801598827f1704822fe4.jpg","https://media.discordapp.net/attachments/608711481969868811/823575046865158175/IMG_20210320_003626.jpg","https://media.discordapp.net/attachments/608711481969868811/823587150150107206/images.png","https://media.discordapp.net/attachments/608711481969868811/823587174402359316/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.png","https://media.discordapp.net/attachments/608711481969868811/823605643042619452/0492c237cfbf2b48ce087e1fe4e2d923.png","https://media.discordapp.net/attachments/608711481969868811/823614977898315836/71769a766e20f45c981caf2c6c01e5b7.png","https://media.discordapp.net/attachments/608711481969868811/823614988014846003/20210129_230814.png","https://media.discordapp.net/attachments/608711481969868811/823505808234643496/1f8064942a5bdb9efb639954ce3f8498.jpg","https://media.discordapp.net/attachments/608711481969868811/823494669317046292/Screenshot_9.png","https://media.discordapp.net/attachments/608711481969868811/823457776520921088/2a16364b3e2d73071b87eca4a9996a7d.jpg","https://media.discordapp.net/attachments/608711481969868811/823438588087107614/Yuzyuzeyken_Konusuruz_on_Instagram__ve_sana_dair_tuttugum_her_dilek_hic_sonmeyen_bir_sk_var.jpg","https://media.discordapp.net/attachments/608711481969868811/823438476460294184/ICON18.jpg","https://media.discordapp.net/attachments/608711481969868811/823438407535165450/f09201a83c2a63f33a6bebddffe93ee0.jpg","https://media.discordapp.net/attachments/608711481969868811/823438378011459594/EmuzfrhXIAApyed.jpg","https://media.discordapp.net/attachments/608711481969868811/823438334940020766/EiOrH87X0AIZyqj.jpg","https://media.discordapp.net/attachments/608711481969868811/823438360080547891/El2VBOdXIAEpruL.jpg","https://media.discordapp.net/attachments/608711481969868811/823438257097801749/c66d3309e454bcf5c18e120254474973.jpg","https://media.discordapp.net/attachments/608711481969868811/823438245811322912/b19b0984e6fedbfab0e22c891800d517.jpg","https://media.discordapp.net/attachments/608711481969868811/823313809669095465/image0.jpg","https://media.discordapp.net/attachments/608711481969868811/823313334937583626/image0.jpg","https://media.discordapp.net/attachments/608711481969868811/823313245767073872/image0.jpg","https://media.discordapp.net/attachments/608711481969868811/823252030885593089/925cce28ba232f44d53d7e231c4254c2.jpg","https://media.discordapp.net/attachments/608711481969868811/823252030737874965/9a5df7a2afbc62aebcabf6cc6900df74.jpg","https://media.discordapp.net/attachments/608711481969868811/823221182924324895/images.png","https://media.discordapp.net/attachments/608711481969868811/823221027881746452/60b8926adc294988cb3f0df8be0ceb4a.png","https://media.discordapp.net/attachments/608711481969868811/823220860638724106/Z.png","https://media.discordapp.net/attachments/608711481969868811/823204491691425803/image0.jpg"];
let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("COUPLE PHOTO")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);

};    

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['couple-pp', 'couple-photo', 'photo-couple', 'foto-couple'],

  permLevel: 0

};

exports.help = {

  name: 'couple-foto',

  description: 'matador',

  usage: 'couple-foto'

};