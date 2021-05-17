const Discord = require("discord.js");
const botMath = require("../../lib/math.js");

module.exports.run = async (bot, message, args) => {
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];
      let v1 = args[3];
      let v2 = args[4];
      let v3 = args[5];

    return message.channel.send(botMath.vektsouc(u1, u2, u3, v1, v2, v3));
};

module.exports.help = {
    name: "vektsouc",
    aliases: ['vs', 'vsouc']
};