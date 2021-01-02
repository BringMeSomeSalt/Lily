const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Sending a meme...');
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle("Meme!")
                    .setImage(json.url)
                msg.edit(memeEmbed);
            });
    }

module.exports.config = {
    name: "Lmeme",
    description: "",
    usage: "Lmeme",
    accessableby: "Members",
    aliases: []
}