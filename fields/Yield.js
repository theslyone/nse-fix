var invert = require('invert-obj');

function Yield (yield) {
  this.message = yield;
}

Yield.prototype.value = function () {
  return this.message;
};

Yield.Tag = '236';

Yield.Type = 'PERCENTAGE';

module.exports = Yield;