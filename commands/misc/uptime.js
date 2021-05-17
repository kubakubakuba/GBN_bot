const ms = require("pretty-ms");
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(ms(bot.uptime))
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "uptime",
    aliases: ["awake"],
}