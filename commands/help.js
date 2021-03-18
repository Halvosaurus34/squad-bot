const { MessageEmbed } = require("discord.js");

module.exports = function (msg, args) {
  const embed = new MessageEmbed()
    .setTitle("Help is on the way!")
    .setColor(0xff0000)
    .setDescription(
      "Type the command to get SquadBot to do something for you!\n\n  {!hello} SquadBot will say hi!\n\n {!define + <word you want defined>} Will send definitions to the chat.\n\n {!gif + <search keyword>} Seraches for a gif from tenor.\n\n {!randomNum + <number range>} will return a random number between 0 and the specified range. Example: !randomNumber 22 will return a random number between 0 and 22."
    );
  msg.channel.send(embed);
};
