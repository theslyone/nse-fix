var invert = require('invert-obj');

function PctAtRisk (pctAtRisk) {
  this.message = pctAtRisk;
}

PctAtRisk.prototype.value = function () {
  return this.message;
};

PctAtRisk.Tag = '869';

PctAtRisk.Type = 'PERCENTAGE';

module.exports = PctAtRisk;