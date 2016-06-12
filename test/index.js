'use strict';

var assert = require('assert');
var botkitChronos = require('../lib');

describe('botkit-chronos', function () {
  it('should preprocess time related text', function () {
    assert.deepEqual(
      botkitChronos.extract('meeting on the 5th of May 2016'),
      'meeting on the TS1462438800000'
    );
  });
});
