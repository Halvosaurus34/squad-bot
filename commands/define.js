module.exports = function (msg, args) {
  if (!args[0]) {
    msg.channel.send(
      "You need to provide word to define after !define. Example: !define mask"
    );
    return;
  }
  var axios = require("axios").default;
  const defineKey = process.env.DEFINEAPIKEY;
  console.log(defineKey);
  var options = {
    method: "GET",
    url: "https://twinword-word-graph-dictionary.p.rapidapi.com/definition_kr/",
    params: { entry: args[0] },
    headers: {
      "x-rapidapi-key": defineKey,
      "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.meaning);
      if (response.data.meaning.noun) {
        let newNoun = response.data.meaning.noun.split(/[()]+/);
        let count = 1;
        newNoun.forEach((element) => {
          if (element !== "nou" && element !== "") {
            msg.channel.send(`Noun ${count}.) ` + element);
            count++;
          }
        });
      }
      if (response.data.meaning.verb) {
        let newVerb = response.data.meaning.verb.split(/[()]+/);
        let count = 1;
        newVerb.forEach((element) => {
          if (element !== "vrb" && element !== "") {
            msg.channel.send(`Verb ${count}.) ` + element);
            count++;
          }
        });
      }
      if (response.data.meaning.adverb) {
        let newAdverb = response.data.meaning.adverb.split(/[()]+/);
        let count = 1;
        newAdverb.forEach((element) => {
          if (element !== "adv" && element !== "") {
            msg.channel.send(`Adverb ${count}.) ` + element);
            count++;
          }
        });
      }
      if (response.data.meaning.adjective) {
        let newAdjective = response.data.meaning.adjective.split(/[()]+/);
        let count = 1;
        newAdjective.forEach((element) => {
          if (element !== "adj" && element !== "") {
            msg.channel.send(`Adjective ${count}.) ` + element);
            count++;
          }
        });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
