const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let MSG = message.content
    .split(`L8ball`)
    .join(' ');

    let responses = [
        "YES",
        "NO",
        "ABSOLUTELY",
        "ABSOLUTELY NOT",
        "MAY BE?",
        "Without a doubt",
        "Very doubtful",
        "Better not tell you now",
        "Concentrate and ask again",
        "try again!",
    ]
    let Response = responses[Math.floor(Math.random()*(responses.length)-1)] 
  
    const embed = new Discord.MessageEmbed()
    .setTitle('LILY 8ball!')
    .setColor('#66ff66')
    .setDescription(`${MSG}`+ " | My reply is: " +Response)

    message.channel.send(embed);
}

module.exports.config = {
    name: "L8ball",
    description: "Answers 8ball",
    usage: "L8ball",
    accessableby: "Members",
    aliases: []
}