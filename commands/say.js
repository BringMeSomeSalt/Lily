const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let MSG = message.content
    .split(`Lsay`)
    .join("");
    if (!MSG)
      return message.channel.send(`Please specify your message to send!`);
    message.channel.send(MSG);
    message.delete();

}

module.exports.config = {
    name: "Lsay",
    description: "",
    usage: "Lsay",
    accessableby: "Members",
    aliases: []
}