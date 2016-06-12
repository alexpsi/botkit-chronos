'use strict';
var chrono = require('chrono-node');

function chronoExtract(text) {
  var results = chrono.parse(text);
  var ts = results[0].start.date().getTime();
  return text.replace(results[0].text, 'TS' + ts);
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
