const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });


var fs = require('fs');
var files = fs.readdirSync('./floppa/');




client.on('ready', () => {
  client.user.setStatus('online') //You can set idle, dnd or invisible
  client.user.setActivity("use floppa to get a image!",  { type: 'PLAYING' }) // PLAYING , LISTENING , WATCHING , STREAMING
  console.log("on discord lol");
  console.log(client.guilds.cache.size)
});
/*
const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster('topggtoken', client)

ap.on('posted', () => {
  console.log(`Posted stats to Top.gg!`)
})

*/




  client.on("messageCreate", message=> {
    if (message.content === 'floppa')
    if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES"))
    if (message.guild && message.channel.permissionsFor(message.guild.me).has("ATTACH_FILES")) {
    
        imageNumber = files[Math.floor(Math.random()*files.length)]
        message.channel.send ( {files: ["./floppa/" + imageNumber]} ).catch(err => console.log(err));
    }
        
// finds a random image in a folder
   });
  client.on("messageCreate", message=> {
    if (message.mentions.has(client.user))
    if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) {
        message.channel.send('You can use get help by saying "floppa help" in the chat :wink:').catch(err => console.log(err));
    }
});


//sends a little message when pinged

client.on("messageCreate", message=> {
  if (message.content === 'floppa ping') 
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`).catch(err => console.log(err));
  }
});

// just a ping command 


client.on("messageCreate", message=> {
  if (message.content === 'floppa help')
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) {
    message.channel.send({ embeds: [helpEmbed] }).catch(err => console.log(err));
  }
});

client.on("messageCreate", message=> {
  if (message.content === 'oakham sam')
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES"))
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) {
    message.channel.send("https://cdn.discordapp.com/attachments/779194094332936193/888176144925474846/E_XPP63WQAUU2Nx.png").catch(err => console.log(err));
  }
});

//little easteregg a guy named Matthew64#4870 wanted me to add

//sends an embed of commands after typing floppa help
  
const helpEmbed = new MessageEmbed()
	.setColor('0x00FFFF ')
	.setTitle('Commands')
	.setDescription('floppa - displays an image of a floppa\nfloppa ping - shows the ping of the bot and the api\nfloppa help - well you are using it right now\nfloppa fact - shows a fun fact about floppa aka caracal')

// the embed itself

client.on("messageCreate", message=> {
  if (message.content === 'floppa fact')
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) {

let facts = [
  "Caracal can reach 35 to 39 inches in length and 35 to 40 pounds in weight. Males are slightly larger than females.",
  "Body is covered with short fur that can be tan, brown or black in color. Caracal's ears end with tufts of black hair (same morphological feature is characteristic for lynx).",
  "Caracal has excellent sense of hearing. 20 muscles move ears in various directions and adjust their position to collect even the slightest sound of the prey.",
  "Caracal is nocturnal animal (active during the night). It can be active during the day in protected areas (habitats where caracals are not affected by human activity).",
  "Caracal is carnivore (meat-eater). It eats hares, rodents, rabbits, hyraxes, antelopes and birds.",
  "Caracal is fast animal that can accomplish a speed of 50 miles per hour. It can outrun animals such as antelopes and ostriches.",
  "Caracal is not afraid to attack animal that is three times bigger of its size.",
  "Just like leopard, caracal sometimes stores leftovers of food in the trees and bushes.",
  "Caracal does not digest fur. It removes the fur with sharp claws before it starts eating the prey.",
  "Caracal is able to jump 16 feet in the air and to catch a bird in flight. Caracal can catch (and kill) 10 to 12 birds in a single leap. Thanks to that skill, caracals were kept in captivity to entertain Persian royalty in the past.",
  "Caracal is solitary and territorial animal. Size of territory depends on the habitat. It can range from 5 to over 1000 square miles. Male's territory usually overlaps with territories of few nearby females.",
  "Caracal is very vocal animal that can meow, growl, purr and hiss.",
  "Caracal can mate throughout the whole year but it prefers period from October to February.",
  "Pregnancy in females lasts 78 to 81 days and ends with 2 to 6 kittens. Young caracals open their eyes 6 to 10 days after birth. They depend on the mother's milk during the first 10 weeks of their life. Youngsters will stay with their mother until the age of one year. Caracals reach sexual maturity at the age of 12 to 16 months.",
  "Caracal can survive 12 years in the wild and up to 17 years in captivity.",
  "floppa is an animal called Caracal",
  "Caracals usually have around three babies at a time. Sometimes they have as many as six babies at once.",
  "Caracals have reddish brown fur. Their fur helps camouflage them so they are hidden from prey or enemies. They hide in long grass or wooded areas.",
  "Caracal males sometimes fight for a female.",
  "Female caracals are good moms. They have their babies in caves, burrows or old tree stumps. They take care of their babies for the first six months.",
  // a shit ton of facts lol
];
const randomFact = Math.floor(Math.random() * facts.length);
//find a random line and sends it

message.channel.send(facts[randomFact]+" <:happyfloppa:878019249296261161>").catch(err => console.log(err));
}
//sends the message with the fact plus adds an emote to every message to make it a little more itneresting idk what am I doing 
});


const trollface = "troll";
client.on("messageCreate", message=> {
  if (message.content.includes(trollface))
  if(message.guild.id === "779188280033411103")
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES"))
  if (message.guild && message.channel.permissionsFor(message.guild.me).has("ATTACH_FILES")) {
    message.channel.send ( {files: ["./floppa/troll_face.mp4"]} ).catch(err => console.log(err));
            
var now = new Date();
// convert date to a string in UTC timezone format:
console.log("someone got trolld" + now.toLocaleTimeString());
// Output: 22:44:34
  }
});

client.login ('bot token');
