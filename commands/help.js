module.exports.run = async (bot, message, args) => {
    let cmd = bot.commands.map(x => `**${x.config.usage}** **-** ${x.config.description}`)

    message.channel.send(`🎉**GiveawayBot Commands**\n\n${cmd.join("\n")}\n\nTo see how this bot was created, check out this **GitHub** repository: **https://github.com/gavserve/GiveawayBot**`)
}

module.exports.config = {
    name: "help",
    description: "Sends the list of commands.",
    usage: "g!help",
    accessableby: "Everyone",
    aliases: []
}
