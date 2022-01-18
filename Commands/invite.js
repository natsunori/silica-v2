const Discord = require('discord.js'), { prefix, colors } = require('../config.json');
module.exports = {
	name: 'invite',
	description: 'View the bots invite link',
	execute(message, _args){
        const embed = new Discord.MessageEmbed()
            .addField('**Join the STS discord:          **', 'https://discord.gg/cRu8VUPFdU', true);
        message.channel.send(embed);
    }
}