const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Come and support LILY at LILY's support server!")
        .setDescription('support server: [click here!](https://discord.gg/5nqkBD6rrE)')
        .setColor('#66ff66')
      
    message.channel.send(embed);
}

module.exports.config = {
    name: "Lsupport",
    description: "example of an help.",
    usage: "Lsupport",
    accessableby: "Members",
    aliases: []
}