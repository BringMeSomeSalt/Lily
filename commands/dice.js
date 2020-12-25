const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

function dice() {
    var answers = ["1", "2", "3", "4", "5", "6"]
    return answers[Math.floor(Math.random()*answers.length)];
}
  
   var embed = new Discord.MessageEmbed()
    .setDescription(`${dice()}` + "!")
    .setColor("#80dfff")
  
  message.channel.send(embed);

}
module.exports.config = {
    name: "Ldice",
    description: "Answers 8ball",
    usage: "Ldice",
    accessableby: "Members",
    aliases: []
}