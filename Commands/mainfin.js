const Discord = require('discord.js');
module.exports = {
    name: 'mainfin',
    description: 'Ping!',
    execute(message, args){
        message.delete()
        const embed = new Discord.MessageEmbed()
        .addField("ALERT           ", `${'Silica is back up from planned maintainance thank you for your patience, contact Rhys llewellyn #3527 for any bug reports'}` , true)
        message.channel.send(embed)
    }
}