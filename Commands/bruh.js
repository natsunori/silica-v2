const Discord = require('discord.js');
module.exports = {
	name: 'bruh',
	description: 'Bruh\'s ',
	execute(message, args) {
        message.delete()
        const embed = new Discord.MessageEmbed()
		message.channel.send(`Bruh`);
            

	},
};