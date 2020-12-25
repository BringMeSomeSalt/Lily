const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
            
    if (message.deletable) {
        message.delete();
    }
    if (!message.member.hasPermission('CLEAR_MESSAGE')) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a valid number! valid numbers: 2 -> 9").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 1000) {
        deleteAmount = 1000;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));

}

module.exports.config = {
    name: "Lclear",
    description: "clears message",
    usage: "?claer",
    accessableby: "Members",
    aliases: ['Lc', 'Lpurge']
}