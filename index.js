require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const { GiveawaysManager } = require('discord-giveaways');
const fs = require('fs');
const config = require('./config.json');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) {
         return console.log("Couldn't Find Commands");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name);
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
	return message.channel.send("Say \`g!help\` for a list of commands!");
    }

    let prefix = 'g!';

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if(commandfile) commandfile.run(bot,message,args);
});

require("./util/eventHandler")(bot);

const manager = new GiveawaysManager(bot, {
  storage: "./storage.json",
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    embedColor: "#1da6e0",
    embedColorEnd: "#2f3136",
    reaction: "🎉"
  }
});

bot.giveawaysManager = manager;
bot.config = config;

bot.login(process.env.token);
