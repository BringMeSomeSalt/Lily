const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll1`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`type Lpoll<number between 1 - 10> to make poll has (number you type) reactions.`)
  .setDescription(`${question}`)
  .setColor(`#80dfff`);
  let msgEmbed = await message.channel.send(Embed);
}

module.exports.config = {
    name: "Lpoll1",
    description: "Answers support",
    usage: "Lpoll1",
    accessableby: "Members",
    aliases: []
}
