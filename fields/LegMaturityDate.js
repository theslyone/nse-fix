var invert = require('invert-obj');

function LegMaturityDate (legMaturityDate) {
  this.message = legMaturityDate;
}

LegMaturityDate.prototype.value = function () {
  return this.message;
};

LegMaturityDate.Tag = '611';

LegMaturityDate.Type = 'LOCALMKTDATE';

module.exports = LegMaturityDate;