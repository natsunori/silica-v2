const Discord = require('discord.js');
module.exports = {
	name: 'uwu',
	description: 'uwu',
	execute(message, args) {
        message.delete()
        const embed = new Discord.MessageEmbed()
        message.channel.send('That\'s very uwu of you')
		message.channel.send(`https://tenor.com/view/uwu-smug-anime-stare-gif-17603924`)
            

	},
};