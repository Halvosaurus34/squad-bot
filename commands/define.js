module.exports = function (msg, args) {
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
      if (response.data.meaning.noun) {
        msg.channel.send(response.data.meaning.noun);
      }
      if (response.data.meaning.verb) {
        msg.channel.send(response.data.meaning.verb);
      }
      if (response.data.meaning.adverb) {
        msg.channel.send(response.data.meaning.adverb);
      }
      if (response.data.meaning.adjective) {
        msg.channel.send(response.data.meaning.adjective);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
