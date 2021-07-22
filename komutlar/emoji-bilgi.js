const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
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

    if(message.author.id !== '852608798812012574') return message.channel.send("<a:mortatlikiz:824371309277478942> **Sen önce botun sahibi ol sonra bu komutu kullanırsın.**")
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    motion => motion.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      " **Emoji ismi yazmalısın!**"
    );
  const lewis = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("• Emojinin ismi", `${emojiname}`)
    .addField("• Emoji ID", `${emoji.id}`)
    .addField("• Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(lewis);
  console.log(lewis);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-info"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "",
  usage: ""
};//LEWİS