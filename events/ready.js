const Discord = require("discord.js") 
const fs = require("fs"); 

module.exports = bot => { 
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`)
    bot.user.setActivity(`Lhelp | ${bot.guilds.cache.size} servers!`);
}
