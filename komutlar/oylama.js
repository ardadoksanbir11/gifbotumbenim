const discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => {
let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new discord.MessageEmbed()
   .setURL(`https://discord.gg/NFZpSfZ3Jc`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{

  let mesaj = args.slice(0).join(" ");

  if (mesaj.length < 1) return message.reply("**Oylama Yapabilmem İçin Birşey Yazmalısın.**");

  const embed = new discord.MessageEmbed()

	.setAuthor(`${message.guild.name} - Oylama`,`${message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })})`)


.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
.setFooter(`${message.author.username} Tarafından oylama başlatıldı.`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

    .setColor("RANDOM")

    .setDescription(
      `**${mesaj}**`
    );

  return message.channel.send(embed)
       .then(function(message) {

          message.react("👍").then(emoji => {

            message.react("👎");

          });

        }) 

  
  } }

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};
exports.help = {
  name: "oylama",

  description: "Oylama Yapar.",

  usage: "oylama"
};