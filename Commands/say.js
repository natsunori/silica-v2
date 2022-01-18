const { prefix } = require('../config.json');

module.exports = {
    name: 'say',
    description: 'You can make the bot say whatever',
    execute(message, args){
        let sayMessage = args.join(" ");
        // If the user didn't provide something to say
        if (!args[0]) return message.channel.send('You must provide something to say');
        // Delete the users message
        message.delete();
        // Repeat what the user said
        message.channel.send(sayMessage);
    }
}