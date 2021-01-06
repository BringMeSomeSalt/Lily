const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
    let data = await random.getMeme()
        message.channel.send(data)
    }

    module.exports.config = {
        name: "Lmeme",
        description: "example of an help.",
        usage: "Lmeme",
        accessableby: "Members",
        aliases: []
    }