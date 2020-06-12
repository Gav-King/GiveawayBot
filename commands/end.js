const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD', 'MANAGE_MESSAGES')) {
      message.channel.send('You don\'t have permission to use this command.');
      return;
    }

    if(!args[0]){
        message.channel.send('Please specify a valid message ID!');
        return;
    }

    let giveaway =
    bot.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    bot.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        message.channel.send('Couldn\'t find that giveaway.');
        return;
    }

    bot.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send(`The giveaway has ended.\n${giveaway}`);
    })
    .catch((e) => {
        if(e.startsWith(`The giveaway with the message ID ${giveaway.messageID} has already ended.`)){
            message.channel.send('This giveaway has already ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });
}

module.exports.config = {
    name: "end",
    description: "Ends a giveaway.",
    usage: "g!end <message id | prize>",
    accessableby: "manageServer, manageMessages",
    aliases: []
}
