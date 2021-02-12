module.exports = {
    log: (message, args) => {
        message.reply('Logging')
    },
    start: (message, args) => {
        if (!args || args.length < 1) {
            return message.reply('Lütfen oyuncu sayısı belirtiniz.')
        }
        let game = {
            count: args[0],
        };

        return message.reply(`Oyun ${game.count} kişi ile oynanacak şekilde ayarlanacaktır.`);
    }
}