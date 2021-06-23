const Discord = require('discord.js');
module.exports = {
    name: 'main',
    description: 'Ping!',
    execute(message, args){
        message.delete()
        const embed = new Discord.MessageEmbed()
        .addField("ALERT           ", `${'Silica is going down for planned maintainance sorry for the inconveinece, contact Rhys llewellyn #3527 for more info'}` , true)
        message.channel.send(embed)
    }
}