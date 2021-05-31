const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message){
        const client = message.client;
        let mention = message.mentions.users.first(), user1 = message.author.id;
        if (mention){user1 = mention.id}
        try { user1 = client.users.cache.find(user => user.id === user1) } catch(error) { message.reply(`${user1} is not a valid userid.`).then (async (msg) =>{ setTimeout(function(){msg.delete() }, 3000) }).then(() => {message.channel.stopTyping()})}
        const embed = new MessageEmbed()
        .setImage(user1.displayAvatarURL({ dynamic: true }))
        .addField("Your avatar can be found here", `[PNG](${user1.displayAvatarURL({ format: "png", size: 4096 })}) | [JPG](${user1.displayAvatarURL({ format: "jpg", size: 4096 })}) | [WEBP/GIF](${user1.displayAvatarURL({ dynamic: true, size: 4096 })})`)
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed).then(() => {message.channel.stopTyping()})
    }
};