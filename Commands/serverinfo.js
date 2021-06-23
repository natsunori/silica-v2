module.exports = {
	name: 'serverinfo',
	description: 'displays basic server info ',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
            

	},
};