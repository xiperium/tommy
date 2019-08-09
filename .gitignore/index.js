const Discord = require(¨discord.js¨);

var bot = Discord.client();

bot.on(¨ready¨), function() {
    bot.user.setGame(¨prefix p!¨);
    console.log(¨Le bot a bien ete connecte¨);
});

bot.login(¨NjA5MDAzMzEzMjM2NjcyNTQ0.XUzHRA.-uWP0TyPFT-T7S00So2KvS8359Y¨)
