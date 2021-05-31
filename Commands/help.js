const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
module.exports = {
	name: 'help',
	description: 'help command',
	execute(message, args){
        const client = message.client
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            const embed = new Discord.MessageEmbed()
            .addField("**avatar           **", `${'Displays your avatar'}` , true)
            .addField("**invite          **", `${'Displays an invite to STS'}` , true)
            .addField("**ping          **", `${'Displays the bots latency and the api latency'}` , true)
            .addField("**serverinfo          **", `${'Displays the current servers info'}` , true)
            .addField("**stats           **", `${'This command is currently disabled'}` , true)
            .addField("**uptime          **", `${'Displays the bots uptime in seconds'}` , true)
            message.channel.send(embed).then(() => { message.channel.stopTyping() })
        })
    }
}