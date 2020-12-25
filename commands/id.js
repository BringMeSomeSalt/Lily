const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Mention a user to get their ID!"
        }})
    const lolid = new Discord.MessageEmbed()
    .setThumbnail(mention.user.avatarURL)
    .setColor("#80dfff")
    .addField('Here is ' + `${mention.user.username}\'s ID`, mention.id)
    message.channel.send(lolid)  
}

module.exports.config = {
    name: "Lid",
    description: "example of an help.",
    usage: "Lid",
    accessableby: "Members",
    aliases: []
}