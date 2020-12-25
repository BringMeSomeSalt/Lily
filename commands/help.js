const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Hello, I am Lily!')
        .setDescription('Here is my commands!')
        .setColor('#80dfff')
        .addFields(
            //all commands
         { name: 'General commands:', value: '`Lhelp`,`Linvite`,`Lsupport`,`Lpoll`'},
         { name: 'Moderation commands:', value: '`Lclear`,`Lkick`,`Lban`,`Linfo<someone>`'},
         { name: 'Utility commands:', value: '`Lsay`,`Lannounce`,`Lid`'},
         { name: 'Meme commands:', value: '`Lmeme`,`Lreaction`,`Lhmmm`'},
         { name: 'Fun commands:', value: '`Lhug`,`Lkiss`,`Lslap`,`Lkill`,`Ljoke`'},
         { name: 'Game commands:', value: '`Lslots`'},
         { name: 'Misc commands:', value: '`L8ball<question>`,`Ldice`,`Lflipcoin`,`Lsay`'},
         { name: 'Anime commands:', value: '`Lneko`,`Lkemonomimi`'},
         { name: 'Animal commands:', value: '`Lcute`,`Ldog`,`Lcat`'},
         { name: 'NSFW:', value: '`Lnsfw`'},
         { name: 'Thank you!', value: '[invite bot](http://bit.ly/lilybot) | [support server](https://discord.gg/5nqkBD6rrE)'}
        )

    message.channel.send(embed);
}

module.exports.config = {
    name: "Lhelp",
    description: "example of an help.",
    usage: "Lhelp",
    accessableby: "Members",
    aliases: []
}