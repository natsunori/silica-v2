const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();
moment = require('moment')
backup = require('./backups/backup')

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('message', message => {
    if (!message.guild) return; 
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first(); 
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('kicked at: ' + Date.now() + (' unix time'))
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });

client.once('ready', () => {
  backup.execute(client)
	//console.log('Silica has gone online as of: ' + Date.now() + ' Unix time');
	client.user.setActivity("\"I\'m w\"  -einsheriff");
	//client.user.setActivity( 'Rhys is live', { type: 'STREAMING', url: 'https:///www.twitch.tv/Rhysllewellyn1' })
  //client.user.setActivity('Rhys\' pc while he sleeps', { type: 'WATCHING' });
});

console.log(`\x1B[92m| Online:    | \x1b[96mSilica Online!                        \x1B[92m | ${moment(Date.now())}\x1B[0m`)



client.on('message' , (message) => {
    if (message.author.bot) return
	//chat logs console.log(`[${message.author.tag}]: ${message.content}`);
if (message.content === '-12ms') {
    message.channel.send('hell yeah -12ms, im fast as fuck boi')
}
});



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('whoops looks like rhys\' code broke again If the error persistes contact Rhys Llewellyn #3527');
	}
});



		client.login(config.token);


