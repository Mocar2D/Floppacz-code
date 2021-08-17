const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });


var fs = require('fs');
var files = fs.readdirSync('./floppa/');




client.on('ready', () => {
  client.user.setStatus('invisible') //You can set idle, dnd or invisible
  client.user.setActivity("use floppa to get a image!",  { type: 'PLAYING' }) // PLAYING , LISTENING , WATCHING , STREAMING
  console.log("on discord lol");
});


client.on('message', msg => {
    if (msg.content === 'floppa') {
        //number = 29;
        //imageNumber = Math.floor (Math.random() * (number -1 + 1))+ 1;
        //msg.channel.send ( {files: ["./floppa/" + imageNumber + ".png"]} )
        imageNumber = files[Math.floor(Math.random()*files.length)]
        msg.channel.send ( {files: ["./floppa/" + imageNumber]} )
var now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toLocaleTimeString());
// Output: 22:44:34
    }

  });
 
  client.on('message', message => {
    if (message.mentions.has(client.user)) {
        message.channel.send('You can get help by saying "floppa help" in the chat :wink:');
    }
});
//sends a little message when pinged
client.on('message', message => {
  if (message.content === 'floppa ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});
// just a ping command 

client.on('message', message => {
  if (message.content === 'floppa help') {
    message.channel.send({ embeds: [helpEmbed] });
  }
});

//sends an embed of commands after typing floppa help
  
const helpEmbed = new MessageEmbed()
	.setColor('0x00FFFF ')
	.setTitle('Commands')
	.setDescription('floppa - displays an image of a floppa\nfloppa ping - shows the ping of the bot and the api\nfloppa help - well you are using it right now')

// the floppa help embed itself

client.login ('TOKEN');
