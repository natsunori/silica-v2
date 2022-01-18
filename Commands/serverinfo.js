const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'View your servers information',
    execute(message, _args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#eb34e8')
            .setTitle('Silica')
            .addField(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        message.channel.send(embed);
    }
}