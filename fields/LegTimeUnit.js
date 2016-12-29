var invert = require('invert-obj');

function LegTimeUnit (legTimeUnit) {
  this.message = legTimeUnit;
}

LegTimeUnit.prototype.value = function () {
  return this.message;
};

LegTimeUnit.Tag = '1001';

LegTimeUnit.Type = 'STRING';

module.exports = LegTimeUnit;