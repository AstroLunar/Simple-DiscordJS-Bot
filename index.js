global.config = require("./config.json");
require("./app.js");
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`[SDJSB]: Logged in as ${client.user.tag}!`);
  client.application.commands.create({
    name: 'ping',
    description: 'A simple command that responds with Pong!',
  });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply(`:ping_pong: Pong! ${client.ws.ping}Ms`);
  }
});

client.login(config.bot.token);
