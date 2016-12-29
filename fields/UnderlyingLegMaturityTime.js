var invert = require('invert-obj');

function UnderlyingLegMaturityTime (underlyingLegMaturityTime) {
  this.message = underlyingLegMaturityTime;
}

UnderlyingLegMaturityTime.prototype.value = function () {
  return this.message;
};

UnderlyingLegMaturityTime.Tag = '1405';

UnderlyingLegMaturityTime.Type = 'TZTIMEONLY';

module.exports = UnderlyingLegMaturityTime;