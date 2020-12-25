const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "You can use this command in an NSFW Channel!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/ero')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("LILY nsfw commands")
      .setColor(`#80dfff`)
      .addFields(
        //all commands
     { name: 'NSFW commands:', value: '`Lhentai`,`Lhentaigif`,`Lero`,`Leroneko`,`Lanal`,`Lblowjob`,`Lcum`,`Lerofeet`,`Leroyuri`, `Lfemdom`,`Lboobs`,`Llewdneko`'},
     { name: 'Thank you!', value: '[invite bot](http://bit.ly/lilybot) | [support server](https://discord.gg/5nqkBD6rrE)'}
    )
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));
	
}

module.exports.config = {
    name: "Lnsfw",
    description: "example of an nsfw help.",
    usage: "Lnsfw",
    accessableby: "Members",
    aliases: []
}