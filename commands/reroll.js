const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD', 'MANAGE_MESSAGES')) {
      message.channel.send('You don\'t have permission to use this command.');
      return;
    }

    if (!args.slice(0).join(" ")) {
      message.channel.send('Please specify a valid message ID!');
      return;
    }

    let giveaway =
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if (!giveaway) {
      message.channel.send('I couldn\'t find that giveaway.');
      return;
    }

    bot.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Giveaway rerolled!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('This giveaway is not ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });
    
}

module.exports.config = {
    name: "reroll",
    description: "Rerolls a giveaway.",
    usage: "g!reroll <message id | prize>",
    accessableby: "manageServer, manageMessages",
    aliases: []
}
