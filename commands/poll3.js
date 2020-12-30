const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll3`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`New poll!`)
  .setDescription(`${question}`)
  .setColor(`#66ff66`);
  let msgEmbed = await message.channel.send(Embed);
  message.delete();
  await msgEmbed.react("1️⃣");
  await msgEmbed.react("2️⃣");
  await msgEmbed.react("3️⃣");
}

module.exports.config = {
    name: "Lpoll3",
    description: "Answers support",
    usage: "Lpoll3",
    accessableby: "Members",
    aliases: []
}
