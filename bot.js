require("dotenv").config();
const Discord = require("discord.js");
const { config } = require("dotenv");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("bot ready...");
}

const commandHandler = require("./commands");
client.on("message", commandHandler);
