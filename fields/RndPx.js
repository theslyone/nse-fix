var invert = require('invert-obj');

function RndPx (rndPx) {
  this.message = rndPx;
}

RndPx.prototype.value = function () {
  return this.message;
};

RndPx.Tag = '991';

RndPx.Type = 'PRICE';

module.exports = RndPx;