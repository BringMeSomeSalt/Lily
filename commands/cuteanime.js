const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async (bot, message, args) => {
        let subreddits = ["awwnime"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
          .setTitle(`Cute Anime!`)
          .setColor("RANDOM")
          .setImage(img);
        message.channel.send(Embed);
      }

    module.exports.config = {
        name: "Lcuteanime",
        description: "example of an help.",
        usage: "Lcuteanime",
        accessableby: "Members",
        aliases: []
    }