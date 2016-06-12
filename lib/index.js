'use strict';
var chrono = require('chrono-node');

function chronoExtract(text) {
  var results = chrono.parse(text);
  if (results[0] && results[0].start) {
    var ts = results[0].start.date().getTime();
    text = text.replace(results[0].text, 'TS' + ts);
  }
  return text;
}

module.exports = {
  use: function (controller) {
    return controller.middleware.receive.use(function (bot, message, next) {
      if (message.type === 'message') {
        message.text = chronoExtract(message.text);
      }
      next();
    });
  },
  extract: chronoExtract
};
