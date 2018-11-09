const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("")
setInterval(function() {
channel.send(`collecting credit procces`);
}, 25)
})
 
 
client.login('NTEwMTA0MjU1NTc5OTQ3MDE4.DscxOw.nFB6jL_c7VeHBWuoF0ZWsJQZ48g');