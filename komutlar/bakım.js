const Discord = require("discord.js");
const db = require("megadb");
const ayarlar = require("../ayarlar.json")
let server = new db.crearDB('server')
exports.run = async (client, message, args) => {

  if(message.author.id !== '852608798812012574') {
     const embed = new Discord.MessageEmbed()
    .setDescription("<a:mortatlikiz:824371309277478942> **Sen önce botun sahibi ol sonra bu komutu kullanırsın.**")
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
if(args[0] === "aç"){
  if(!args[1]){
  message.channel.send('Bakım Sebebi Girmelisin.')
  }
  server.set('bakım', args.slice(1).join(' '))
  if (args.slice(1).join(' ')) {
  message.channel.send("Bakım Modu Açıldı.")
    }
} else if(args[0]=== "kapat"){
  message.channel.send("Bakım Modu Kapatıldı.")
  server.delete('bakım')
}
} 


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım-modu', 'bakımmodu'],
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'Bakım.',
  usage: 'Bakım'
};