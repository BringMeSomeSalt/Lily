const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let question = message.content
  .split(`Lpoll7`)
  .join(' ');

const Embed = new Discord.MessageEmbed()
  .setTitle(`New poll!`)
  .setDescription(`${question}`)
  .setColor(`#66ff66`);
  let msgEmbed = await message.channel.send(Embed);
  await msgEmbed.react("1️⃣");
  await msgEmbed.react("2️⃣");
  await msgEmbed.react("3️⃣");
  await msgEmbed.react("4️⃣");
  await msgEmbed.react("5️⃣");
  await msgEmbed.react("6️⃣");
  await msgEmbed.react("7️⃣");
  message.delete();
}

module.exports.config = {
    name: "Lpoll7",
    description: "Answers support",
    usage: "Lpoll7",
    accessableby: "Members",
    aliases: []
}
