var invert = require('invert-obj');

function NoQuoteSets (noQuoteSets) {
  this.message = noQuoteSets;
}

NoQuoteSets.prototype.value = function () {
  return this.message;
};

NoQuoteSets.Tag = '296';

NoQuoteSets.Type = 'NUMINGROUP';

module.exports = NoQuoteSets;