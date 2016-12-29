var invert = require('invert-obj');

function UnderlyingStipType (underlyingStipType) {
  this.message = underlyingStipType;
}

UnderlyingStipType.prototype.value = function () {
  return this.message;
};

UnderlyingStipType.Tag = '888';

UnderlyingStipType.Type = 'STRING';

module.exports = UnderlyingStipType;