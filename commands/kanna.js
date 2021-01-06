const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

module.exports.run = async (bot, message, args) => {
        try {
            const image = await api.get("neko");
            message.channel.send(image);
        } catch (err) {
            console.log(err)
        }
    }

    module.exports.config = {
        name: "Lnekotest",
        description: "example of an help.",
        usage: "Lkanna",
        accessableby: "Members",
        aliases: []
    }