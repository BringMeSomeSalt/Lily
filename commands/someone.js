const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  var members = [];
  
  message.guild.members.forEach((member) => {
    if (!member.user.bot)
      members.push(member);  
  });
  
  var randomUser = members[Math.floor(Math.random() * members.length)];
  
  await message.channel.send({embed: {
                    color: 3447003,
                    description: "Someone has been summoned (╯°□°）╯︵ ┻━┻:"
                }})
message.channel.send(`(${randomUser})`);
}

module.exports.config = {
    name: "Lsomeone",
    description: "",
    usage: "Lsomeone",
    accessableby: "Members",
    aliases: []
}