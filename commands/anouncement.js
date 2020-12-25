const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let MSG = message.content
    .split(`Lannounce`)
    .join(' ');
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`New announcement!`)
    .setDescription(`${MSG}`)
    .setColor("GREEN");

    message.channel.send(embed);
    message.delete();
  }

module.exports.config = {
    name: "Lannounce",
    description: "",
    usage: "Lannounce",
    accessableby: "Members",
    aliases: []
}