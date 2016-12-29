var invert = require('invert-obj');

function DefBidSize (defBidSize) {
  this.message = defBidSize;
}

DefBidSize.prototype.value = function () {
  return this.message;
};

DefBidSize.Tag = '293';

DefBidSize.Type = 'QTY';

module.exports = DefBidSize;