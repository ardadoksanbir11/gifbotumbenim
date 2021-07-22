const arda2 = require("discord.js"); 
const client = new arda2.Client();
const db = require("quick.db")
const DBL = require("dblapi.js");
const arda = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OTY3NzEzNjQwNjc3MzkwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjM3NDYyfQ.Gjvb_KfVEwLxaExnmhBWCXotAo0lYhA4lkMPq3R4WGc', client);


exports.run = async(client, message) => {
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new arda2.MessageEmbed()
 .setURL(`https://discord.gg/NFZpSfZ3Jc`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{
if (message.guild.id !== "803432476193062972") return message.channel.send('***<a:hayir:822936728297799720> Hata: https://discord.gg/NFZpSfZ3Jc Bu komutu sadece destek sunucumda kullanabilirsin.***')
    arda.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new arda2.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor("BLUE")
.setDescription("**Destek Sunucumuzda Özel Rol Alabilmen İçin Bota Oy Vermen Gerekiyor.**")
.addField("Oy Vermek İçin", `[TIKLA](https://top.gg/bot/${client.user.id}/vote)`)
)

        } else {
  message.channel.send( new arda2.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setDescription("**Destek Sunucumuzda Başarıyla Özel Rolünüz Verildi.**")
.setColor("BLUE")
)
            const tag = "🎁";
            const nick = message.author.username
            message.member.roles.add("822955509249212416")   
            message.member.setNickname(`${tag} ${nick} `)
        } 
    })
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyverdim"],
  permLevel: 0,
   
};

exports.help = {
  name: 'oy-verdim',
 description: 'Bota oy verirseniz rolü kaparsınız',
 usage: 'oyverdim'
};
