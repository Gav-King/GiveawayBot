const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
    let giveaways = activeGiveaways.filter((g) => !g.ended);

    if (giveaways.length === 0) {
      message.channel.send('No giveaways are currently active in this server.');
      return;
    }

    message.channel.send(`${giveaways.map((g) => `**Prize**: ${g.data.prize} **|** **Winners**: ${g.data.winnerCount}\n**Time Remaining**: ${ms(g.startAt + g.endAt)}\n**ID**: ${g.messageID}`).join("\n\n")}`);
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
