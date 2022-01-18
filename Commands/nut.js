module.exports = {
	name: 'nut',
	description: 'Bruh\'s ',
	execute(message, _args) {
        message.delete();
		message.channel.send('Someone hit the nut button');
        message.channel.send('https://tenor.com/view/nut-button-anime-press-press-button-gif-17216779');
	}
}