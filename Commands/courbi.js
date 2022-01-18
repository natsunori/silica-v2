const Discord = require('discord.js');

module.exports = {
	name: 'courbi',
	description: 'Bruh\'s ',
	execute(message, _args) {
		message.delete()
		if (message.author.id === "630481836665208835" || message.author.id === "502250268558229534") {
			const embed = new Discord.MessageEmbed()
			message.channel.send('you\'re very cute you fucking cunt, ily');
		}
	}
}