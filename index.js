require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const { GiveawaysManager } = require('discord-giveaways');

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

bot.login(process.env.token);
