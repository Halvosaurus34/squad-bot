module.exports = function (msg, args) {
  let group = args;
  let teamA = [];
  let teamB = [];
  if (!args[0]) {
    msg.channel.send("You need to provide names to be able to pick teams!");
    return;
  }
  console.log(group);
  for (let i = 0; i < args.length / 2 + 1; i++) {
    let randomNum = Math.floor(Math.random() * group.length);
    console.log(randomNum);
    let splice = group.splice(randomNum, 1);
    teamA.push(splice[0]);
  }
  teamB = group;
  console.log(teamA, teamB);
  msg.channel.send(
    "Team 1: " + teamA.join(", ") + "\n" + "Team 2: " + teamB.join(", ")
  );
};
