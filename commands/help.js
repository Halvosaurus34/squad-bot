const { MessageEmbed } = require("discord.js");

module.exports = function (msg, args) {
  const embed = new MessageEmbed()
    .setTitle("Help is on the way!")
    .setColor(0xff0000)
    .setDescription(
      "Type the command to get SquadBot to do something for you!"
    );
  msg.channel.send(embed);
  embed = new MessageEmbed()
    .setTitle("!define")
    .setColor(0xff0000)
    .setDescription(
      "!define + <word you want defined> will send definitions to the chat"
    );
  msg.channel.send(embed);
};
