const Discord = require('discord.js');
module.exports = {
	name: 'nut',
	description: 'Bruh\'s ',
	execute(message, args) {
        message.delete()
        const embed = new Discord.MessageEmbed()
		message.channel.send(`Someone hit the nut button`);
        message.channel.send("https://tenor.com/view/nut-button-anime-press-press-button-gif-17216779")
            

	},
};