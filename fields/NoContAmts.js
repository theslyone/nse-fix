var invert = require('invert-obj');

function NoContAmts (noContAmts) {
  this.message = noContAmts;
}

NoContAmts.prototype.value = function () {
  return this.message;
};

NoContAmts.Tag = '518';

NoContAmts.Type = 'NUMINGROUP';

module.exports = NoContAmts;