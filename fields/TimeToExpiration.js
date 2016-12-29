var invert = require('invert-obj');

function TimeToExpiration (timeToExpiration) {
  this.message = timeToExpiration;
}

TimeToExpiration.prototype.value = function () {
  return this.message;
};

TimeToExpiration.Tag = '1189';

TimeToExpiration.Type = 'FLOAT';

module.exports = TimeToExpiration;