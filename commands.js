const gif = require("./commands/gif");
const hello = require("./commands/hello");
const define = require("./commands/define");
const randomNumber = require("./commands/randomNum");
const help = require("./commands/help");
const commands = { gif, hello, define, randomNumber, help };
module.exports = async function (msg) {
  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  // console.log(msg);
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    commands[command](msg, tokens);
  }
};
