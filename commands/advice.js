const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
    let data = await random.getAdvice()
        message.channel.send(data)
    }

    module.exports.config = {
        name: "Ladvice",
        description: "example of an help.",
        usage: "Ladvice",
        accessableby: "Members",
        aliases: []
    }