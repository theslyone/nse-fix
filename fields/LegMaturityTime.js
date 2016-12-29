var invert = require('invert-obj');

function LegMaturityTime (legMaturityTime) {
  this.message = legMaturityTime;
}

LegMaturityTime.prototype.value = function () {
  return this.message;
};

LegMaturityTime.Tag = '1212';

LegMaturityTime.Type = 'TZTIMEONLY';

module.exports = LegMaturityTime;