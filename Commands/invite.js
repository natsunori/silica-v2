const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
module.exports = {
	name: 'invite',
	description: 'invite',
	execute(message, args){
        const client = message.client
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            const embed = new Discord.MessageEmbed()
            .addField("**Join the STS discord:          **", `${'https://discord.gg/cRu8VUPFdU'}` , true)
            message.channel.send(embed).then(() => { message.channel.stopTyping() })
        })
    }
}