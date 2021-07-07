const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
    module.exports = {
        name: 'serverinfo',
        description: 'Ping!',
        execute(message, args){
            message.channel.send('Loading data').then (async (msg) =>{
                msg.delete()
                const embed = new Discord.MessageEmbed()
            .setColor('#eb34e8')
            .setTitle('Silica')
            .addField(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
                message.channel.send(embed).then(() => { message.channel.stopTyping() })
            })
        }
    }