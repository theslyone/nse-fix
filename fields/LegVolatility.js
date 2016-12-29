var invert = require('invert-obj');

function LegVolatility (legVolatility) {
  this.message = legVolatility;
}

LegVolatility.prototype.value = function () {
  return this.message;
};

LegVolatility.Tag = '1379';

LegVolatility.Type = 'FLOAT';

module.exports = LegVolatility;