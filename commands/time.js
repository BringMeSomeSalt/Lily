const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("Today is:", `${Day}` + ", " + `${Month}` + ", " + `${Year}`)
.addField("Time of day:", `${today.toString().split(" ")[4]}`)
message.channel.send({ embed })

}

module.exports.config = {
    name: "Ltime",
    description: "example of an help.",
    usage: "Ltime",
    accessableby: "Members",
    aliases: []
}