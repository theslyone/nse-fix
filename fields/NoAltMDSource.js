var invert = require('invert-obj');

function NoAltMDSource (noAltMdsource) {
  this.message = noAltMdsource;
}

NoAltMDSource.prototype.value = function () {
  return this.message;
};

NoAltMDSource.Tag = '816';

NoAltMDSource.Type = 'NUMINGROUP';

module.exports = NoAltMDSource;