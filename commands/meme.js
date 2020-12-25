const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmemes","dankmeme","meme","MemesOfAnime","AnimeFunny","wholesomememes","MemeEconomy","techsupportanimals","meirl","me_irl","2meirl4meirl","AdviceAnimals"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setURL(`http://reddit.com/${random}`)
    .setColor(`#80dfff`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "Lmeme",
    description: "",
    usage: "Lmeme",
    accessableby: "Members",
    aliases: []
}