const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.channel.send('You don\'t have permission to use this command.');
      return;
    }

    let giveawayDuration = args[0];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: You have to specify a valid duration!');
    }

    if (isNaN(args[0][0])) {
      message.channel.send('The time you provided is not a number.');
      return;
    }

    let giveawayChannel = message.mentions.channels.first();
    if (!giveawayChannel) {
      message.channel.send('You must provide a valid channel!');
      return;
    }

    let giveawayWinners = args[2];
    if (isNaN(args[2]) || (parseInt(giveawayWinners) <= 0)) {
      message.channel.send('You didn\'t provide a valid amount of winners!');
      return;
    }

    let giveawayPrize = args.slice(3).join(" ");
    if (!giveawayPrize) {
      message.channel.send('You didn\'t specify a prize!');
      return;
    }

    bot.giveawaysManager.start(giveawayChannel, {
      time: ms(giveawayDuration),
      prize: giveawayPrize,
      winnerCount: giveawayWinners,
      hostedBy: bot.config.hostedBy ? message.author : null,
      messages: {
        giveaway: (bot.config.everybodyMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY** 🎉🎉",
        giveawayEnded: (bot.config.everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**",
        inviteToParticipate: "React with 🎉",
        winMessage: "Congratulations, {winners}. You won the **{prize}**!",
        embedFooter: "Giveaways",
        noWinner: "Nobody reacted.",
        hostedBy: "Hosted by: {user}",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
      });
}

module.exports.config = {
    name: "start",
    description: "Starts a giveaway.",
    usage: "g!start <s | m | d | w> <channel> <winners> <prize>",
    accessableby: "manageServer, manageMessages",
    aliases: []
}
