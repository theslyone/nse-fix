var invert = require('invert-obj');

function LegOptionRatio (legOptionRatio) {
  this.message = legOptionRatio;
}

LegOptionRatio.prototype.value = function () {
  return this.message;
};

LegOptionRatio.Tag = '1017';

LegOptionRatio.Type = 'FLOAT';

module.exports = LegOptionRatio;