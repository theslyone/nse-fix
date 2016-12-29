var invert = require('invert-obj');

function LegSide (legSide) {
  this.message = legSide;
}

LegSide.prototype.value = function () {
  return this.message;
};

LegSide.Tag = '624';

LegSide.Type = 'CHAR';

module.exports = LegSide;