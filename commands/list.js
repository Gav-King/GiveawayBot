const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);
    let giveaways = activeGiveaways.filter((g) => !g.ended);

    if (giveaways.length === 0) {
      message.channel.send('No giveaways are currently active in this server.');
      return;
    }

    message.channel.send(`<:GiveawayEmoji:721476177574756404> **Active Giveaways** <:GiveawayEmoji:721476177574756404>${giveaways.map((g) => `**Prize**: ${g.data.prize} **|** **Winners**: ${g.data.winnerCount}\n**ID**: ${g.messageID}\n**Channel**: <#${g.channelID}>`).join("\n\n")}`);
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
