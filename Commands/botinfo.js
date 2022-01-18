const Discord = require('discord.js');

module.exports = {
    name: 'botinfo',
    description: 'View information on the bot',
    execute(message, _args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#eb34e8')
            .setTitle('Silica')
            .addField(
                '**About me!**', 
                'Hey there im silica, a bot codded in almost completly node.js. Development on the silica platform started in early 2020 where the entire codebase was run out of the index file no fancy command handler just listening for certain messages. This cause silica to become suitibly hard to develop and development ceased. In early 2021 silica was completly rebuilt from the ground up with only her API token staying the same since then silica has had multiple quality of life updates and some major updates to her newsfeed system.'
            );
    
        message.channel.send(embed);
    }
}