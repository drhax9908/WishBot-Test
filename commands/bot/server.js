module.exports = {
    usage: 'Prints out a link to this bots help/testing server.',
    cooldown: 20,
    process: (bot, msg)=> {
        bot.createMessage(msg.channel.id, "__**" + msg.author.username + "-senpai, heres a invite to my server:**__\n**<https://discord.gg/0lBiROCNVaGw5Eqk>**").catch();
    }
}