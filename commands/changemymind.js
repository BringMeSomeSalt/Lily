  
const Random = require("srod-v2");

    module.exports.run = async (bot, message, args) => {
        if (!message.content.includes(" ")) {
            return message.channel.send("Please specify what you want to say.")
        }
        message.channel.send('Creating image...')
        let input = message.content.substring(message.content.indexOf(' ') + 1)
        let ChangeMyMind = await Random.ChangeMyMind(`${input}`, "BLUE");
        message.channel.send(ChangeMyMind);
    }

    module.exports.config = {
        name: "Lchangemymind",
        description: "",
        usage: "Lchangemymind",
        accessableby: "Members",
        aliases: []
    }