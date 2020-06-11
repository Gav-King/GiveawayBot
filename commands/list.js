const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.getAllGiveaways();

    let main = activeGiveaways.filter((giveaway) => giveaway.guildID === message.guild.id);

    message.channel.send(`${main}`);
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
