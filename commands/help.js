module.exports.run = async (bot, message, args) => {
    let cmd = bot.commands.map(x => `**${x.config.usage}** **-** ${x.config.description}`)

    message.channel.send(`<:GiveawayEmoji:721476177574756404> **GiveawayBot Commands** <:GiveawayEmoji:721476177574756404>\n\n${cmd.join("\n")}\n\nTo see how this bot was created, check out this **GitHub** repository: **https://github.com/gavserve/GiveawayBot**`)
}

module.exports.config = {
    name: "help",
    description: "Sends the list of commands.",
    usage: "g!help",
    accessableby: "Everyone",
    aliases: []
}
