var invert = require('invert-obj');

function StartStrikePxRange (startStrikePxRange) {
  this.message = startStrikePxRange;
}

StartStrikePxRange.prototype.value = function () {
  return this.message;
};

StartStrikePxRange.Tag = '1202';

StartStrikePxRange.Type = 'PRICE';

module.exports = StartStrikePxRange;