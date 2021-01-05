const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
        let data = await random.getKpop()
        message.channel.send(data)
    }

    module.exports.config = {
        name: "Lkpop",
        description: "example of an help.",
        usage: "Lkpop",
        accessableby: "Members",
        aliases: []
    }