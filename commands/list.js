const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let activeGiveaways = bot.giveawaysManager.giveaways.filter((x) => x.guildID === message.guild.id && !x.ended);

    message.channel.send(`${activeGiveaways.join('\n')}`);
}

module.exports.config = {
    name: "list",
    description: "Lists all the active giveaways in the server.",
    usage: "g!list",
    accessableby: "Everyone",
    aliases: []
}
