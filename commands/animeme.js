
const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random

module.exports.run = async (bot, message, args) => {
        const subreddits = ["Animemes"]
        let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        somethingRandom.getMeme(randomSubReddit).then(res => {
            const embed = new MessageEmbed()
                .setTitle("Anime meme!")
                .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
                .setImage(res.img)
                .setFooter(`👍 ${res.upvotes} | 👎 ${res.downvotes} | 💬 ${res.comments}`)
                .setAuthor(`From ${res.author}`)
                .setColor('RANDOM')
            message.channel.send(embed)
        }).catch(e => message.channel.send('API Error. Please try again.'))
    }

    module.exports.config = {
        name: "Lanimeme",
        description: "example of an help.",
        usage: "Lanimeme",
        accessableby: "Members",
        aliases: []
    }