const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async (bot, message, args) => {
        let subreddits = ["kemonomimi"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
          .setTitle(`Kemonomimi!`)
          .setColor("RANDOM")
          .setImage(img);
        message.channel.send(Embed);
      }


module.exports.config = {
    name: "Lkemonomimi",
    description: "",
    usage: "Lkemonomimi",
    accessableby: "Members",
    aliases: []
}