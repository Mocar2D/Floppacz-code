const Discord = require('discord.js');
const bot = new Discord.Client();

var fs = require('fs');
var files = fs.readdirSync('./floppa/');


bot.on('ready', () => {
  bot.user.setStatus('dnd') //You can set idle, dnd or invisible
  bot.user.setActivity("use floppa to get a image!",  { type: 'PLAYING' }) // PLAYING , LISTENING , WATCHING , STREAMING
});

bot.on('message', msg => {
    if (msg.content === 'floppa') {
        //number = 29;
        //imageNumber = Math.floor (Math.random() * (number -1 + 1))+ 1;
        //msg.channel.send ( {files: ["./floppa/" + imageNumber + ".png"]} )
        imageNumber = files[Math.floor(Math.random()*files.length)]
        msg.channel.send ( {files: ["./floppa/" + imageNumber]} ) 
var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toLocaleTimeString());
// Output: Wed, 21 Jun 2017 09:13:01 GMT
    }

  });



bot.login ('TOKEN');