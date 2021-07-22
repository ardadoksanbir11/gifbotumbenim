const discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => {
let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new discord.MessageEmbed()
 .setURL(`https://discord.gg/NFZpSfZ3Jc`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/NFZpSfZ3Jc)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{

  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<a:hayir:822936728297799720> Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın.`);
  
if(isNaN(args[0])) return message.channel.send(("<a:hayir:822936728297799720> Bir rakam girmelisin. **Örneğin; !!sil 100**")).then(x => x.delete({timeout: 5000}))


if (args[0] < 1) return message.reply("<a:hayir:822936728297799720> **1** adetten az mesaj silemem.").then(x => x.delete({timeout: 5000}))
if (args[0] > 100) return message.reply("<a:hayir:822936728297799720> **100** adetten fazla mesaj silemem.").then(x => x.delete({timeout: 5000}))
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("<a:hayir:822936728297799720> **14** günden önceki mesajları silemem.").then(x => x.delete({timeout: 5000}))
})
message.channel.send(`**${args[0]}** adet mesaj başarıyla uzay boşluğuna fırlatıldı. <a:evet:822936655828746271>`).then(x => x.delete({timeout: 5000}))
};
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: 'sil <miktar>'
};