const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
module.exports = {
	name: 'uptime',
	description: 'Ping!',
	execute(message, args){
        const client = message.client
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            const embed = new Discord.MessageEmbed()
            .addField("**Uptime           **", `${client.uptime / 1000 + ' seconds'}` , true)
            message.channel.send(embed).then(() => { message.channel.stopTyping() })
        })
    }
}