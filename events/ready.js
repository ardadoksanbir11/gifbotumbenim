const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client()
var prefix = ayarlar.prefix;
module.exports = client => {


client.user.setStatus("dnd")
client.user.setActivity(`!!yardım - ${client.guilds.cache.size} Sunucu ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı!`, { type: 'PLAYING'});
       
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Prefix: ${prefix}]`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Status: Online]`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Sunucu: ${client.guilds.cache.size}]`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Kanal: ${client.channels.cache.size}]`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Kullanıcı: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}]`);
};