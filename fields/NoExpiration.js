var invert = require('invert-obj');

function NoExpiration (noExpiration) {
  this.message = noExpiration;
}

NoExpiration.prototype.value = function () {
  return this.message;
};

NoExpiration.Tag = '981';

NoExpiration.Type = 'NUMINGROUP';

module.exports = NoExpiration;