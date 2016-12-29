var invert = require('invert-obj');

function SecureData (secureData) {
  this.message = secureData;
}

SecureData.prototype.value = function () {
  return this.message;
};

SecureData.Tag = '91';

SecureData.Type = 'DATA';

module.exports = SecureData;