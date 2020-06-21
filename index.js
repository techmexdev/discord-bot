const Discord = require('discord.js');
const client = new Discord.Client();

const { BOT_TOKEN } = process.env

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    console.log(`${msg.author} said ping`)
    if (msg.author === 'xylafur' || msg.author === 'Kesley') {
      msg.reply('fuck you')
    } else {
      msg.reply('pong');
    }
  }
});

client.login(BOT_TOKEN);
