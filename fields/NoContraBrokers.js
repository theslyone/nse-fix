var invert = require('invert-obj');

function NoContraBrokers (noContraBrokers) {
  this.message = noContraBrokers;
}

NoContraBrokers.prototype.value = function () {
  return this.message;
};

NoContraBrokers.Tag = '382';

NoContraBrokers.Type = 'NUMINGROUP';

module.exports = NoContraBrokers;