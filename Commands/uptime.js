const Discord = require('discord.js'), { prefix, colors } = require('../config.json');
module.exports = {
	name: 'uptime',
	description: 'View the bots uptime',
	execute(message, _args) {
        const client = message.client;
        const embed = new Discord.MessageEmbed()
            .addField('**Uptime           **', `${client.uptime / 1000 + ' seconds'}` , true);
        message.channel.send(embed);
    }
}