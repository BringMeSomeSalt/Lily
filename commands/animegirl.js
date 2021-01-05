const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
        let data = await random.getAnime()
        message.channel.send(data)
    }

    module.exports.config = {
        name: "Lanimegirl",
        description: "example of an help.",
        usage: "Lanimegirl",
        accessableby: "Members",
        aliases: []
    }