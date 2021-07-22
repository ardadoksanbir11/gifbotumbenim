const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require("quick.db");
var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {
if(message.author.id !== '852608798812012574'){
   message.channel.send("<a:mortatlikiz:824371309277478942> **Sen önce botun sahibi ol sonra bu komutu kullanırsın.**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Kullanıcı Belirtmelisin.**')
   
  db.delete(`kullanicikaraliste_${nesne}`)
         await message.react("824799298435809320");

  }  
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["beyazliste"],
    permLevel: 0
}

exports.help = {
    name: 'whitelist',
    description: '',
    usage: 'whitelist'
}