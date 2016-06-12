# botkit-chronos [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A middleware that extracts time information from messages using the chrono library. (WORK IN PROGRESS)

## Installation

```sh
$ npm install --save botkit-chronos
```

## Usage

```js
var Botkit = require('botkit');
var botkitChronos = require('botkit-chronos');
var controller = Botkit.slackbot({
  debug: false
});
botkitChronos.use(controller);

// The controller will listen on all texts starting with 'meeting on' and are followed by a phrase that contains time related
// content. For example the robot will respond to: 
//
// Deploy next Friday
// Deploy next month
// Deploy next monday
// Deploy 6th of June
//
// When a time phrase is detected its replaced with TS#timestamp

controller.hears(['Deploy TS(.*)'],'direct_message,direct_mention,mention', function(bot, message) {
  var ts = parseInt(message.text.match(/Deploy TS(.*)/i)[1]);
  bot.reply(message, 'Ok I will deploy on: ' + new Date(ts));
});



```
## License

MIT © [Alex Psi]()


[npm-image]: https://badge.fury.io/js/botkit-chronos.svg
[npm-url]: https://npmjs.org/package/botkit-chronos
[travis-image]: https://travis-ci.org/alexpsi/botkit-chronos.svg?branch=master
[travis-url]: https://travis-ci.org/alexpsi/botkit-chronos
[daviddm-image]: https://david-dm.org/alexpsi/botkit-chronos.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/alexpsi/botkit-chronos
