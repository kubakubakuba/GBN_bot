const Discord = require("discord.js");
const botMath = require("../../lib/math.js");

module.exports.run = async (bot, message, args) => {
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];

      return message.channel.send(botMath.velikostVektoru(u1, u2, u3, "Velikost vektoru"));
};

module.exports.help = {
    name: "vektvel",
    aliases: ['velikostv', 'vv', 'velvekt']
};