module.exports = function (msg, args) {
  if (!args[0]) {
    msg.channel.send(
      "You need to provide a range after !randomNumber. Example: !randomNumber 12"
    );
    return;
  }
  console.log(args);
  msg.channel.send(Math.floor(Math.random() * args) + 1);
};
