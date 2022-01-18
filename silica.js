const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const moment = require('moment');
const backup = require('./backups/backup');
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();

// Declaring command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// Declaring command files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


// Rich presence array
let statuses = ['https://github.com/natsunori', 'https://natsunori.github.io/', 'WLSS102382', 'Project deepvault', 'courbie kinda cute ngl']
// Readying the client and starting rich presence
client.once('ready', () => {
	// For the backup client controlling keep alive logs 
	backup.execute(client)

	setInterval(function () {
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setPresence({ activity: { name: status, type: 'WATCHING' }, status: 'online' });
	}, 10000)
});

// Silicas start message
console.log(`\x1B[92m| Online:    | \x1b[96mSilica Online!                        \x1B[92m | ${moment(Date.now())}\x1B[0m`)

client.once('reconnecting', () => {
	console.log('Reconnecting!')
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', (message) => {
	if (message.author.bot) return

	if (message.content === '-12ms') {
		message.channel.send('hell yeah -12ms, im fast as fuck boi')
	}
});


// The sus command that was disabled
client.on('message', (message) => {
	if (message.author.bot) return;
	// Permanent commands
	if (message.content === '102382') {
		message.channel.send('Did some one say sus??? amoung us?? sussy baka?? when the imposta is sus??????');
		return message.channel.send('https://tenor.com/view/csp-gif-21091124');
	} else if (message.content === 'succulent') {
		return message.channel.send('succulent');
	} else if (message.content === '<@!448590726217859072>') {
		return message.channel.send('<@!448590726217859072>');
	}
	// Command handler
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('whoops looks like natsunori\'s code broke again If the error persistes contact natsunori #3527');
	}
});

// Requiring token from config
client.login(config.token);