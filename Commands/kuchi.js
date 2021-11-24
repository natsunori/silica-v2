const Discord = require('discord.js');
module.exports = {
	name: 'kuchi',
	description: 'Bruh\'s ',
	execute(message, args) {
        message.delete()
        if(message.author.id === "630481836665208835" || message.author.id === "339838960484483072"){
        const embed = new Discord.MessageEmbed()
		message.channel.send(`You're a beta male cuck`);
       }
     
        else return  

	},
};

