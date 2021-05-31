const { prefix } = require("../config.json");
module.exports = {
    name: 'say',
    aliases: ['say'],
    description: 'You can make the bot say whatever.',
    usage: `\`${prefix}say\``,
    guildOnly: true,
    permissions: 'ADMINISTRATOR',
    cooldown: 2.5,
    category: 'fun',
    execute(message, args){
        let sayMessage = args.join(" ");
        if(!args[0]){ sayMessage = `You must give me something to say.`, message.channel.send(sayMessage).then(() => {message.channel.stopTyping()})} 
        else {message.delete(); message.channel.send(sayMessage).then(() => {message.channel.stopTyping()})}
    }
}