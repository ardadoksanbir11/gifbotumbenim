const player = require("discordjs-ytdl-advanced")
const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let arda = await db.fetch(`aşkım${message.author.id}`)
  if(arda) {

} else { return message.channel.send(`${message.author}, **Bu komut lewisin sadece özel kişilere sağladığı bir komuttur.**`) }


if (!args[0]) return message.reply("<a:ReddetmekGif:824798230318546974> **Şarkı Adı Girmeyi Unuttun Kanki.**");
  if (message.member.voice.channel){
    try {
    const baglanti = await message.member.voice.channel.join()
    const anan = await player(args.join(""))
    anan.play(baglanti)
         const altanembed = new MessageEmbed()
        .setColor('BLUE')
        .addField(`**Şarkı Başlığı**`,anan.title)
        .addField(`**Şarkı Süresi**`, anan.time)
        .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .setTimestamp()
        .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
         message.channel.send(altanembed);
  } catch(err) {
    message.channel.send("<a:ReddetmekGif:824798230318546974> **Şarkıyı bulamadım.**")
  }                    
  }else {
    message.reply("<a:ReddetmekGif:824798230318546974> **Lütfen Bir Ses Kanalına Girip Tekrar Deneyin.**")
  }
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['play',],
  permLevel: 0
};


exports.help = {
  name: "çal"
};