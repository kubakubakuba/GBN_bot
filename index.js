const keepAlive = require("./server.js");
const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`\x1b[4m \x1b[31m ${bot.user.username} is ready for action! \x1b[0m \n`);
  if (config.activity.streaming == true) {
    bot.user.setActivity(config.activity.game, {
      url: 'https://twitch.tv/Herdyn'
    });
  } else {
    bot.user.setActivity(config.activity.game, {
      type: 'STREAMING'
    }); //PLAYING, LISTENING, WATCHING, STREAMING
    bot.user.setStatus('idle'); // dnd, idle, online, invisible
  }
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  fs.readdir(`./commands/${folder}/`, (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0)
      return console.log("There are no commands left to load...");

    console.log(`\x1b[33mLoading \x1b[0m \x1b[35m ${jsfiles.length} \x1b[0m \x1b[33m commands from folder \x1b[0m \x1b[32m ${folder} \x1b[0m...`);
    jsfiles.forEach((f, i) => {
      let props = require(`./commands/${folder}/${f}`);
      console.log(`${i + 1} : \x1b[32m ${folder} \x1b[0m \x1b[31m / \x1b[0m \x1b[36m ${f} \x1b[0m`);
      bot.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
      });
    });
  });
}

keepAlive();
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;

    if (!message.content.startsWith(prefix)) return;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if (command) command.run(bot, message, args);
});

bot.login(process.env.TOKEN);