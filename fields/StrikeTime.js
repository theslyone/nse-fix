var invert = require('invert-obj');

function StrikeTime (strikeTime) {
  this.message = strikeTime;
}

StrikeTime.prototype.value = function () {
  return this.message;
};

StrikeTime.Tag = '443';

StrikeTime.Type = 'UTCTIMESTAMP';

module.exports = StrikeTime;