const Discord = require("discord.js")
const fetch = require('node-fetch');
const db = require('quick.db')
const axios = require('axios');

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

if (!args.length) {

  axios.get('https://corona.lmao.ninja/v2/all')
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle(`Dünya - COVID-19 Bilgileri`)
            .setFooter(`Verilerin Apiye İşlemesi Biraz Gecikebilir.`)
            .setThumbnail(response.data.flag)
            .setDescription('**Ülkeler Hakkında Bilgi Almak İsterseniz.** ' + ` \`!!korona <ülke kodu>\` `)
                .addField(':test_tube: **Toplam Test Sayısı**', response.data.tests, true)
                .addField(':microbe: **Toplam Vaka Sayısı**', response.data.cases, true)
                .addField(':syringe: **Toplam İyileşen Sayısı**', response.data.recovered, true)
                .addField(':skull_crossbones: **Toplam Vefat Sayısı**', response.data.deaths, true)
                .addField(':dna: **Bugünkü Vaka Sayısı**', response.data.todayCases, true)
                .addField(':skull: **Bugünkü Vefat Sayısı**', response.data.todayDeaths, true)
                .addField(':adhesive_bandage: **Bugünkü İyileşen Sayısı**', response.data.todayRecovered, true)
                .addField(':mask: **Aktif Vaka Sayısı**', response.data.active, true)
                .addField(':anger: **Kritik Hasta Sayısı**', response.data.critical, true)
                .addField(':busts_in_silhouette: **Nüfus**', response.data.population, true)
                        .setTimestamp();

                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
         axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
                .then((response) => {
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
.setColor("BLACK")
.setThumbnail(response.data.countryInfo.flag)
        .setFooter(`Verilerin Apiye İşleme Süresinden Dolayı 0(Sıfır) Gösterebilir.`)
        .setTitle(`${response.data.country} - COVID-19 Bilgileri`)
                .addField(':test_tube: **Toplam Test Sayısı**', response.data.tests, true)
                .addField(':microbe: **Toplam Vaka Sayısı**', response.data.cases, true)
                .addField(':syringe: **Toplam İyileşen Sayısı**', response.data.recovered, true)
                .addField(':skull_crossbones: **Toplam Vefat Sayısı**', response.data.deaths, true)
                .addField(':dna: **Bugünkü Vaka Sayısı**', response.data.todayCases, true)
                .addField(':skull: **Bugünkü Vefat Sayısı**', response.data.todayDeaths, true)
                .addField(':adhesive_bandage: **Bugünkü İyileşen Sayısı**', response.data.todayRecovered, true)
                .addField(':mask: **Aktif Vaka Sayısı**', response.data.active, true)
                .addField(':anger: **Kritik Hasta Sayısı**', response.data.critical, true)
                .addField(':earth_americas: **Kıta**', response.data.continent, true)
                .addField(':globe_with_meridians: **Ülke**', response.data.country, true)
                .addField(':busts_in_silhouette: **Nüfus**', response.data.population, true)

    
    message.channel.send(embed);
                })
                .catch((error) => {
          message.channel.send('<a:ReddetmekGif:824798230318546974> **Geçersiz Ülke Kodu Girdiniz Lütfen Tekrar Deneyin.**')
          
})
        
    
}}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['korona','korona','korona','korona'],
  permLevel: 0
};

exports.help = {
name: 'corona'
};