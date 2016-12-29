var invert = require('invert-obj');

function RoundLot (roundLot) {
  this.message = roundLot;
}

RoundLot.prototype.value = function () {
  return this.message;
};

RoundLot.Tag = '561';

RoundLot.Type = 'QTY';

module.exports = RoundLot;