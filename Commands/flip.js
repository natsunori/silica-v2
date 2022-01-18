const Discord = require('discord.js');

module.exports = {
    name: 'flip',
    description: 'Flip a coin',
    execute(message, _args) {
        /**
         * Get a random side of a coin
         * @returns Random coin side
         */
        function doRandHT() {
            var rand = ['HEADS!', 'TAILS!'];
            return rand[Math.floor(Math.random() * rand.length)];
        }

        // Delete the users message
        message.delete();

        // Construct embed
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Here is the winner');
        embed.setDescription(doRandHT());
        embed.setColor('#eb34e8');

        // Send the embed
        message.channel.send(embed);
    }
}