const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let IPadr = "play.hypixel.net";
      let MCport = "21335";
      let adress = IPadr+":"+MCport;
      //let DYNport = "21333";
      const fetch = require("node-fetch");
      const res = await fetch("https://api.mcsrvstat.us/2/"+IPadr+":"+MCport);
      const status = await res.json();
      const fetch2 = require("node-fetch");
      const res2 = await fetch("https://api.swpelc.eu/mc/seed.json");
      const seeds = await res2.json();

        let mc = new Discord.MessageEmbed()
        .setColor('#059c2d')
        .setTitle('Minecraft Server')
        .addField('Aktuální season', 'SEASON6', false)
        .addField('Verze serveru', status.software + " " + status.version, false)
        .addField('IP adresa', IPadr + ":" + MCport, false)
        .addField('Dynmapa', "http://dynmap.swpelc.eu", false)
        .addField('Seed-Overworld', seeds.overworld, false)
        .addField('Seed-Nether', seeds.nether, false)
        .addField('Seed-End', seeds.end, false)
        .addField('Online', status.players.online + " => " + status.players.list)
      return message.channel.send(mc);
};

module.exports.help = {
    name: "mc",
    aliases: ['minecraft']
};