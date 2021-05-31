const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args){
        const client = message.client, APIPing = Math.round(client.ws.ping)+ "ms";
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            const embed = new Discord.MessageEmbed()
            .addField("**Latency           **", `${msg.createdTimestamp - message.createdTimestamp}ms` , true)
            .addField("**API Gateway       **", APIPing , true)
            message.channel.send(embed).then(() => { message.channel.stopTyping() })
        })
    }
}