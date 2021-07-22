const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
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

    let mesaj = args.slice().join(' ')
if (!mesaj) return message.reply('**Lütfen bir hata belirtiniz. <a:ReddetmekGif:824798230318546974>**')
message.delete()
client.channels.cache.get("826900461575471125").send(new Discord.MessageEmbed()
.addField('<a:wumpus:824797918066114621> **Kullanıcı**', message.author.tag)
.addField("<a:wumpus:824797918066114621> **Kullanıcının İdsi**", message.author.id)
.addField('<a:wumpus:824797918066114621> **Sunucu**', message.guild.name)
.addField('<a:wumpus:824797918066114621> **Hata**', mesaj)
).then(a => message.channel.send('***Hatayı Bildirdiğiniz İçin Teşekkürler En Kısa Zamanda Düzelicektir İyi Günler. <a:OnaylamakGif:824798196949188638>***')).then(x => x.delete({timeout: 3000}))
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatabildir", "hata-bildir", "bug", "bug-bildir", "bugbildir"],
  permLevel: 0
};

exports.help = {
  name: 'hata',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'hata <mesaj>'
};