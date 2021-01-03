module.exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
    await voiceChannel.leave();
    await message.react('✅')
    await message.channel.send('Goodbye!')
},

    module.exports.config = {
        name: "Lstop",
        description: "example of an help.",
        usage: "Lstop",
        accessableby: "Members",
        aliases: []
    }