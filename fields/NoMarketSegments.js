var invert = require('invert-obj');

function NoMarketSegments (noMarketSegments) {
  this.message = noMarketSegments;
}

NoMarketSegments.prototype.value = function () {
  return this.message;
};

NoMarketSegments.Tag = '1310';

NoMarketSegments.Type = 'NUMINGROUP';

module.exports = NoMarketSegments;