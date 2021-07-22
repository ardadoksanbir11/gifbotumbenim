const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db")
exports.run = async (client, message, args, msg) => {
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

if (message.guild.id !== "803432476193062972") return message.channel.send('***<a:ReddetmekGif:824798230318546974> Hata: https://discord.gg/NFZpSfZ3Jc Bu Komutu Sadece Destek Sunucumda Kullanabilirsin.***')

if (message.channel.id !== "833382207522996326") return message.channel.send("<a:ReddetmekGif:824798230318546974> **Bu Komutu Sadece <#833382207522996326> Kanalında Kullanabilir. /yardım Yazarak Tüm Komutlara Erişebilirsin.**")

message.channel.send(`<a:zil:833284989201678336> **Uptime Yardım Menüsüne Ulaşman İçin \`/yardım\` Yazman Yeterlidir.**`)

}}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['uptime-yardım', 'uptime-sistemi'],
permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'ardacanımsınya',
  usage: 'yardım'
};



