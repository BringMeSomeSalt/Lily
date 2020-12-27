const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll2`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`New poll!`)
  .setDescription(`${question}`)
  .setColor(`#66ff66`);
  let msgEmbed = await message.channel.send(Embed);
  await msgEmbed.react(":one:");
  await msgEmbed.react(":two:");
}

module.exports.config = {
    name: "Lpoll2",
    description: "Answers support",
    usage: "Lpoll2",
    accessableby: "Members",
    aliases: []
}
