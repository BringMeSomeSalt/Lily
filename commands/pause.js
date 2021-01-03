const { Util, MessageEmbed } = require("discord.js");
const sendError = require("@util/musicerror")

module.exports.run = async (bot, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        let xd = new MessageEmbed()
            .setDescription("⏸ Paused the music for you!")
            .setColor("YELLOW")
            .setTitle("Music has been paused!")
        return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
}

    module.exports.config = {
        name: "Lpause",
        description: "example of an help.",
        usage: "Lpause",
        accessableby: "Members",
        aliases: []
    }