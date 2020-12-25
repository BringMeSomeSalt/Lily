const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`New poll!`)
  .setDescription(`${question}`)
  .setColor(`#66ff66`);
  let msgEmbed = await message.channel.send(Embed);
  await msgEmbed.react("👍");
  await msgEmbed.react("👎");
}

module.exports.config = {
    name: "Lpoll",
    description: "Answers support",
    usage: "Lpoll",
    accessableby: "Members",
    aliases: []
}
