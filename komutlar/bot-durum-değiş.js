const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async(client, message, args) => {
   if(message.author.id !== '852608798812012574') return message.channel.send("<a:mortatlikiz:824371309277478942> **Sen önce botun sahibi ol sonra bu komutu kullanırsın.**");


let mesaj = args.slice(0).join(" ");


  if (mesaj.length < 1) return message.reply("**Botun durumunu değişmem için bir yazı yazmalıısn.**");

client.user.setActivity(`${mesaj}`)
return message.channel.send("Durum başarıyla değiştirildi.")
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-durum-değiş','botun-durum-değiş'],
  permLevel: 0,
};

exports.help = {
  name: 'durum-değiş',
  description: '',
  usage: ''
};