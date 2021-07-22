const Discord = require('discord.js');
const   client = new Discord.Client();
const moment = require("moment");
const osutils = require("os-utils")
const os = require('os');
require("moment-duration-format");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
    
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


  
  let linkler = await db.fetch(`linkler`)
    const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
    osutils.cpuUsage(function(v) {
    const istatistikozel = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setURL(`https://discord.gg/SsMY8WsGRD`)
    .setTitle("GİF BOT İstatistikleri", true)
.addField("<:developer:822920503483695114> | Geliştirici",":white_small_square: **Sahip & Geliştirici** <@485553705538551810>")
.addField("<:earth:832025813640675339> | Bilgiler", `\n :white_small_square: Sunucu Sayısı: **${client.guilds.cache.size}** \n :white_small_square: Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n :white_small_square: Kanal Sayısı: **${client.channels.cache.size}** \n :white_small_square: Ping: **${client.ws.ping}ms** \n :white_small_square: Çalışma Süresi: **${duration}** `,true)
.addField("<:tamir:824799461347295273> | Sürümler", `\n :white_small_square: Discord.js Sürümü: **v${Discord.version}** \n :white_small_square: Node.js Sürümü: **${process.version}** \n :white_small_square: Veri Kaydı: **quick.db** \n :white_small_square: Version: **0.0.3** \n :white_small_square: Modül Sayısı: **19** \n :white_small_square: Bulunan Komut Sayısı: **${client.commands.size}**`,true)
.addField(`<:windows:829802190700937248> | VDS Bilgileri`, `:white_small_square: CPU: **Intel(R) Xeon(R) Gold 6230 CPU @ 2.10GHz** \n :white_small_square: CPU Kullanımı: **${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%** \n :white_small_square: VDS Çekirdekleri: **2 Cores** \n :white_small_square: Ram Kullanımı: **${(process.memoryUsage().heapUsed / 4096 / 4096).toFixed(2)}/4096MB** \n :white_small_square: İşletim Sistemi: **Windows Server 2019** \n :white_small_square: Bit: **${os.arch()}** \n :white_small_square: Lokasyon: **Turkey**`)
.addField(`<:cmd:829799364746412064> | Diğer Bilgiler`, `:white_small_square: DBL Durumu: **Onaylı <:online:823223719476199465>** \n :white_small_square: Onay Durumu: **Onaysız <:dnd:823223818445127731>**`)
.addField(`<:link:829805882664550431> | Linkler`,`:white_small_square: [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=749677136406773902&scope=bot&permissions=8) \n :white_small_square: [Bota Oy Ver](https://top.gg/bot/749677136406773902/vote) \n :white_small_square: [Website](https://www.gif-bot.tk) \n :white_small_square: [Destek Sunucusu](https://discord.gg/x3sBcTJ3PH)`)
.setImage("https://media.discordapp.net/attachments/824249618023841812/831900684038832128/standard_3.gif")
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(istatistikozel)
    })   
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};