  
const superagent = require('superagent');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke!!!")
        .setDescription(response.body.joke)
        .setColor("BLUE");
        message.channel.send(jEmbed);
		})
    }

    module.exports.config = {
        name: "Ljoke",
        description: "",
        usage: "Ljoke",
        accessableby: "Members",
        aliases: []
    }