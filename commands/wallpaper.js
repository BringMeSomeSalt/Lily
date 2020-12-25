const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/wallpaper')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Wallpaper!")
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
    name: "Lwallpaper",
    description: "",
    usage: "Lwallpaper",
    accessableby: "Members",
    aliases: []
}