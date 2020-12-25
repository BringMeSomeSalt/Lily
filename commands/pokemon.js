const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let questions = [
    {
      title: "A wild pokémon has appeared!",
      image:'https://img.pokemondb.net/sprites/bank/normal/bulbasaur.png',
      options: ["Bulbasaur", "Spearow", "Kakuna", "Shellder"],
      correct: 1,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/ponyta.png',
        options: ["Bellsprout", "Ponyta", "Dewgong", "Doduo"],
        correct: 2,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/voltorb.png',
        options: ["Kangaskhan", "Ponyta", "Exeggcute", "Vaporeon"],
        correct: 3,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/ditto.png',
        options: ["Snorlax", "Ditto", "Jolteon", "Omastar"],
        correct: 2,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/dratini.png',
        options: ["Aerodactyl", "Dragonite", "Jolteon", "Dratini"],
        correct: 4,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/aerodactyl.png',
        options: ["Snorlax", "Aerodactyl", "Tauros", "Jynx"],
        correct: 2,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/scyther.png',
        options: ["Scyther", "Starmie", "Kabutops", "Seaking"],
        correct: 1,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/lickitung.png',
        options: ["Snorlax", "Haunter", "Lickitung", "Machop"],
        correct: 3,
    },
    {
        title: "A wild pokémon has appeared!",
        image:'https://img.pokemondb.net/sprites/bank/normal/bellsprout.png',
        options: ["Bellsprout", "Poliwag", "Venomoth", "Venonat"],
        correct: 1,
    },
    {
      title: "A wild pokémon has appeared!",
      image:'https://img.pokemondb.net/sprites/bank/normal/snorlax.png',
      options: ["Articuno", "Kabutops", "snorlax", "Jolteon"],
      correct: 3,
  },
  ];

      let q = questions[Math.floor(Math.random() * questions.length)];
      let i = 0;
      const Embed = new Discord.MessageEmbed()
        .setTitle(q.title)
        .setDescription(
          q.options.map((opt) => {
            i++;
            return `${i} - ${opt}\n`;
          })
        )
        .setColor(`GREEN`)
        .setImage(q.image)
        .setFooter(
          `Reply to this message with the correct question number! You have 15 seconds.`
        );
      message.channel.send(Embed);
      try {
        let msgs = await message.channel.awaitMessages(
          (u2) => u2.author.id === message.author.id,
          { time: 15000, max: 1, errors: ["time"] }
        );
        if (parseInt(msgs.first().content) == q.correct) {
          return message.channel.send(`You got it correct!`);
        } else {
          return message.channel.send(`You got it incorrect.`);
        }
      } catch (e) {
        return message.channel.send(`You did not answer!`);
      }
}

module.exports.config = {
    name: "Lguest",
    description: "",
    usage: "Ltest",
    accessableby: "Members",
    aliases: []
}