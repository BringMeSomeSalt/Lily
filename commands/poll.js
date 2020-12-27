const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`uh...`)
  .setDescription(`Type Lpoll<number between 1 - 10> to make poll has (number you type) reactions. eg. Lpoll2 Do you like cake? 1: yes - 2: no`)
  .setColor(`#80dfff`);
  let msgEmbed = await message.channel.send(Embed);
}

module.exports.config = {
    name: "Lpoll",
    description: "Answers support",
    usage: "Lpoll",
    accessableby: "Members",
    aliases: []
}
