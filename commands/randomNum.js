module.exports = function (msg, args) {
  msg.channel.send(Math.floor(Math.random() * args));
};
