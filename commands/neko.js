const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
    let data = await random.getNeko()
        message.channel.send(data)
    }

    module.exports.config = {
        name: "Lneko",
        description: "example of an help.",
        usage: "Lneko",
        accessableby: "Members",
        aliases: []
    }