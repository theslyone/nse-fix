var invert = require('invert-obj');

function UnderlyingMaturityTime (underlyingMaturityTime) {
  this.message = underlyingMaturityTime;
}

UnderlyingMaturityTime.prototype.value = function () {
  return this.message;
};

UnderlyingMaturityTime.Tag = '1213';

UnderlyingMaturityTime.Type = 'TZTIMEONLY';

module.exports = UnderlyingMaturityTime;