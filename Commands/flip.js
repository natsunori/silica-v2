const Discord = require('discord.js');
module.exports = {
	name: 'flip',
	description: 'Bruh\'s ',
	execute(message, args) {
        message.delete()
		{function doRandHT() {
            var rand = ['HEADS!','TAILS!'];
            
            return rand[Math.floor(Math.random()*rand.length)];
            }
            
             const embed = {
            "title": `Here is the winner!`,
            "description": doRandHT(),
            "color": '#eb34e8',
            };
            message.channel.send({ embed });
            
            
            };
            

	},
};