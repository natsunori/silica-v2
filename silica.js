const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.commands = new Discord.Collection();
moment = require('moment')
backup = require('./backups/backup')

//declaring command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//declaring command files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


//rich presence array
let statuses = ['https://github.com/natsunori', 'https://natsunori.github.io/', 'WLSS102382', 'Project deepvault', 'Dedotated wam?' ]
//readying the client and starting rich presence
client.once('ready', () => {
  //for the backup client controlling keep alive logs 
  backup.execute(client)
  //client.channels.cache.get('927329094444646433').send('**ALERT:** \nSilica has been succesfully migrated back to the server and has returned to a fully operational status, thankyou for your patience futher safegaurds will be imposed in the future to mitigate the affect of situations such as these' );
  //client.channels.cache.get('902337508929589298').send('**ALERT:** \nSilica has been succesfully migrated back to the server and has returned to a fully operational status, thankyou for your patience futher safegaurds will be imposed in the future to mitigate the affect of situations such as these' );
  //client.channels.cache.get('848958525240770591').send('**ALERT:** \nSilica has been succesfully migrated back to the server and has returned to a fully operational status, thankyou for your patience futher safegaurds will be imposed in the future to mitigate the affect of situations such as these' );
  //client.channels.cache.get('859823337375006781').send('**ALERT:** \nSilica has been succesfully migrated back to the server and has returned to a fully operational status, thankyou for your patience futher safegaurds will be imposed in the future to mitigate the affect of situations such as these' );


  setInterval(function() {
  let status = statuses[Math.floor(Math.random()*statuses.length)];
  client.user.setPresence({ activity: {name: status, type: 'WATCHING'}, status: 'online'});
  }, 10000)
});
//silicas start message
console.log(`\x1B[92m| Online:    | \x1b[96mSilica Online!                        \x1B[92m | ${moment(Date.now())}\x1B[0m`)

client.once('reconnecting', () => {
  console.log('Reconnecting!')
});

client.once('disconnect', () => {
  console.log('Disconnect!');
 });



client.on('message' , (message) => {
    if (message.author.bot) return
   
if (message.content === '-12ms') {
    message.channel.send('hell yeah -12ms, im fast as fuck boi')
}
});



//The sus command that was disabled
client.on('message' , (message) => {
  if (message.author.bot) return
if (message.content === 'uuddlrlr') {
  message.channel.send('Did some one say sus??? amoung us?? sussy baka?? when the imposta is sus??????  ')
  message.channel.send('https://tenor.com/view/csp-gif-21091124')
}
});

// suculent autoresponce
client.on('message' , (message) => {
 if (message.author.bot) return
if (message.content === 'succulent') {
  message.channel.send('succulent')
}
});

client.on('message' , (message) => {
 if (message.author.bot) return
if (message.content === '<@!448590726217859072>') {
  message.channel.send('<@!448590726217859072>')
}
});



//command handler 
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

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








   //calling token from config
		client.login(config.token);


