module.exports.run = async (bot, message, args) => {
    message.channel.send('Test Command Works :white_check_mark:')
}

module.exports.config = {
    name: "test",
    description: "Test to see if the bot has crashed.",
    usage: "g!test",
    accessableby: "Everyone",
    aliases: []
}
