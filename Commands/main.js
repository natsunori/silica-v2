const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'main',
    description: 'Ping!',
    execute(message, args){
        message.delete()
        const embed = new Discord.MessageEmbed()
        .addField("ALERT           ", `${'Silica is entering debug mode, some commands may be unavalible'}` , true)
        message.channel.send(embed)
    }
}