const {Random} = require('something-random-on-discord');
const random = new Random();

module.exports.run = async (bot, message, args) => {
    let data = await random.getAnimeImgURL("cry")
    message.channel.send(data)
    }


    module.exports.config = {
        name: "Lanime",
        description: "example of an help.",
        usage: "Lanime",
        accessableby: "Members",
        aliases: []
    }