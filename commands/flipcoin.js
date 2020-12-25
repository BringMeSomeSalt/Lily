const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let responses = [
       "HEADS",
       "TAILS",
       "try again!"
    ]
    let Response = responses[Math.floor(Math.random()*(responses.length)-1)] 
  
    const embed = new Discord.MessageEmbed()
    .setTitle('LILY flipped Coin!')
    .setColor('#66ff66')
    .setDescription("COIN: "+Response)

    message.channel.send(embed);
}

module.exports.config = {
    name: "Lflipcoin",
    description: "Answers coin",
    usage: "Lflipcoin",
    accessableby: "Members",
    aliases: []
}