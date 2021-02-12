require('dotenv').config();

const PREFIX = '.';

const CMD_LIST = [
    'test',
    'kick',
    'ban',
    'game'
]

//``
const { Client } = require('discord.js');
const commands = require('./modules');

const client = new Client();

client.on('ready', () => {
    console.log('Bot savaşa hazır');
});

client.on('message', (message) => {
    if (message.author.bot) return

    if (message.content === 'sa') {
        return message.reply('AS. Hoşgeldin KRAL');
    }

    if (message.content.startsWith(PREFIX)) {

        const [CMD, method, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;
        for (const [id, voiceChannel] of voiceChannels) {
            if (voiceChannel.id === '152127001874923520') {
                count += voiceChannel.members.size

                if (voiceChannel.members.size > 0) {
                    console.log(voiceChannel.members)
                }
            }
        };

        if (CMD_LIST.indexOf(CMD) > -1) {
            return commands[CMD][method](message, args);
        } else {
            return message.channel.send('Komut bulunamadı.');
        }
    }


})

client.login(process.env.BOT_TOKEN);

