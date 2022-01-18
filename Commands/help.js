const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'View the bots help menu',
	execute(message, _args){
        const embed = new Discord.MessageEmbed()
            .setColor('#eb34e8')
            .setAuthor('Help')
            .addField("**avatar           **", 'Displays your avatar', true)
            .addField("**invite          **", 'redundant to be removed', true)
            .addField("**ping          **", 'Displays the bots latency and the api latency', true)
            .addField("**serverinfo          **", 'Displays the current servers info (has been made redundant, to be removed)' , true)
            .addField("**stats           **", '(*new) Dispays bot info' , true)
            .addField("**bruh           **", 'Legit just bruh\'s in chat' , true)
            .addField("**say          **", 'make silica say something' , true)
            .addField("**Flip          **", 'flip a coin ' , true)
            .addField("**botinfo         **", 'silicas development' , true)
            .addField("**uwu         **", 'posts gif in chat' , true)
            .addField("**courbi         **", 'mapped too only two users dont bother trying to use it', true)
            .addField("**sus       **", 'note this command has been disabled for the foreseeable future', true);
        message.channel.send(embed);
    }
}