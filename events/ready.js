const Discord = require('discord.js');

module.exports = bot => {
console.log(`✅|${bot.user.username} is up and working`);
bot.user.setStatus("idle");
bot.user.setActivity('g!help', {type: "PLAYING"});
};
