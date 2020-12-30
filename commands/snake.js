  
const SnakeGame = require('snakecord');
const Embed = require('discord.js')

module.exports.run = async (bot, message, args) => {
        const snakeGame = new SnakeGame({
            title: ' Snake!!!',
            color: "#ff3333",
            timestamp: true,
            gameOverTitle: "Game Over!!!"
        })
        snakeGame.newGame(message);
    }

    module.exports.config = {
        name: "Lsnake",
        description: "example of an help.",
        usage: "Lsnake",
        accessableby: "Members",
        aliases: []
    }