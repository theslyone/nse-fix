var invert = require('invert-obj');

function NoQuoteQualifiers (noQuoteQualifiers) {
  this.message = noQuoteQualifiers;
}

NoQuoteQualifiers.prototype.value = function () {
  return this.message;
};

NoQuoteQualifiers.Tag = '735';

NoQuoteQualifiers.Type = 'NUMINGROUP';

module.exports = NoQuoteQualifiers;