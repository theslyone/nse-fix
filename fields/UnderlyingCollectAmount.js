var invert = require('invert-obj');

function UnderlyingCollectAmount (underlyingCollectAmount) {
  this.message = underlyingCollectAmount;
}

UnderlyingCollectAmount.prototype.value = function () {
  return this.message;
};

UnderlyingCollectAmount.Tag = '986';

UnderlyingCollectAmount.Type = 'AMT';

module.exports = UnderlyingCollectAmount;