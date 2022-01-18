const Discord = require('discord.js');

module.exports = {
    name: 'main',
    description: 'Announce an upcoming maintenance',
    execute(message, _args) {
        message.delete()
        const embed = new Discord.MessageEmbed()
            .addField("ALERT           ", 'Silica is entering debug mode, some commands may be unavalible' , true)
        message.channel.send(embed);
    }
}