module.exports.run = async (bot, message, args) => {
    message.channel.send(`In **${bot.guilds.cache.size}** servers!`)
}

module.exports.config = {
    name: "servers",
    description: "Checks the amount of servers GiveawayBot is in.",
    usage: "g!servers",
    accessableby: "Everyone",
    aliases: []
}
