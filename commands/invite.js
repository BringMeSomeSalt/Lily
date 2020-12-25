const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Invite LILY!!!")
        .setDescription('Invite: [click here!](http://bit.ly/lilybot)')
        .setColor('BLUE')
      
    message.channel.send(embed);
}

module.exports.config = {
    name: "Linvite",
    description: "example of an help.",
    usage: "Linvite",
    accessableby: "Members",
    aliases: []
}