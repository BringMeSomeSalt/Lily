const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/gecg')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Here's a random genetically engineered catgirl image!")
      .setImage(response.body.url)
      .setColor("#80dfff")
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}

module.exports.config = {
    name: "Lgecg",
    description: "",
    usage: "Lgecg",
    accessableby: "Members",
    aliases: []
}