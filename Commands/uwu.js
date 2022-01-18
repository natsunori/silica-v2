module.exports = {
	name: 'uwu',
	description: 'uwu',
	execute(message, _args) {
        message.delete();
        message.channel.send('That\'s very uwu of you');
		message.channel.send('https://tenor.com/view/uwu-smug-anime-stare-gif-17603924');
	}
}