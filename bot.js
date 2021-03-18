require("dotenv").config();
const Discord = require("discord.js");
const { config } = require("dotenv");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("bot ready...");
}
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  if (!channel) return;
  channel.send(
    `Welcome to the server, ${member}! If you want to know what our bot can do, just type !help.`
  );
});
const commandHandler = require("./commands");
client.on("message", commandHandler);
