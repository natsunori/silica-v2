const Discord = require('discord.js'), { prefix, colors } = require('../config.json');

module.exports = {
	name: 'ping',
	description: 'Show the clients response time',
	async execute(message, _args) {
        const client = message.client,
            APIPing = Math.round(client.ws.ping) + 'ms';
        let msg = await message.channel.send('Loading data');
        const embed = new Discord.MessageEmbed()
            .setColor('#eb34e8')
            .setAuthor('Ping')
            .addField('**Latency           **', `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField('**API Gateway       **', APIPing, true)
        msg.delete();
        message.channel.send(embed);
    }
}