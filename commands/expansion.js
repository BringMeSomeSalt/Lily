const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Hello, I am Lily!')
        .setDescription('Here is my expansion commands!')
        .setColor('#80dfff')
        .addFields(
            //all commands
         { name: 'Attention!', value: 'Some Commands are test commands! find more information about those commands? go to [support server](https://discord.gg/5nqkBD6rrE)'},
         { name: 'General commands:', value: 'Lexpansion'},      
         { name: 'Utility commands:', value: ''},
         { name: 'Meme commands:', value: ''},
         { name: 'Fun commands:', value: ''},
         { name: 'Game commands:', value: ''},
         { name: 'Misc commands:', value: ''},
         { name: 'Anime commands:', value: 'Lavatar'},
         { name: 'Thank you!', value: '[invite bot](http://bit.ly/lilybot) | [support server](https://discord.gg/5nqkBD6rrE)'}
        )

    message.channel.send(embed);
}

module.exports.config = {
    name: "Lexpansion",
    description: "example of an help.",
    usage: "Lhelp",
    accessableby: "Members",
    aliases: []
}