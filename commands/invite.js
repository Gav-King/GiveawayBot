const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("GiveawayBot's Invite Link")
    .setDescription('Invite GiveawayBot with this **[link](https://discord.com/oauth2/authorize?client_id=720374601649094656&permissions=8&scope=bot)**!')
    .setColor('BLUE');
    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "Sends GiveawayBot's invite link.",
    usage: "g!invite",
    accessableby: "Everyone",
    aliases: []
}
