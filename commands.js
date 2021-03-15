const gif = require("./commands/gif");
const hello = require("./commands/hello");
const commands = { gif, hello };
module.exports = async function (msg) {
  let tokens = msg.content.split(" ");
  let command = tokens.shift();

  if (command.charAt(0) === "!") {
    command = command.substring(1);
    commands[command](msg, tokens);
  }
};
