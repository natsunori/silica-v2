module.exports = {
	name: 'bruh',
	description: 'Bruh\'s ',
	execute(message, _args) {
        message.delete();
		message.channel.send('Bruh');
	},
}