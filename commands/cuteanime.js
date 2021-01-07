const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["awwnime"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setURL(`http://reddit.com/${random}`)
    .setColor(`#ff3399`)

    message.channel.send(embed);

}
    module.exports.config = {
        name: "Lcuteanime",
        description: "example of an help.",
        usage: "Lcuteanime",
        accessableby: "Members",
        aliases: []
    }