const Discord = require('discord.js'), { prefix, colors } = require("../config.json");
    module.exports = {
        name: 'stats',
        description: 'Ping!',
        execute(message, args){
            const client = message.client, APIPing = Math.round(client.ws.ping)+ "ms";
            message.channel.send('Loading data').then (async (msg) =>{
                msg.delete()
                const embed = new Discord.MessageEmbed()
            .addField("**Server info**",  `${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
            .addField("**Servers**",client.guilds.cache.size, true)
            .addField("**Memory Usage**", `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB/${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`, true)
            .addField("**Uptime           **", `${client.uptime / 1000 + ' seconds'}` , true)
            .addField("**Latency           **", `${msg.createdTimestamp - message.createdTimestamp}ms` , true)
            .addField("**API Gateway       **", APIPing , true)
            .addField("**Join the STS discord:          **", `${'https://discord.gg/cRu8VUPFdU'}` , true)
                message.channel.send(embed).then(() => { message.channel.stopTyping() })
            })
        }
    }