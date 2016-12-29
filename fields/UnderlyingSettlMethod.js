var invert = require('invert-obj');

function UnderlyingSettlMethod (underlyingSettlMethod) {
  this.message = underlyingSettlMethod;
}

UnderlyingSettlMethod.prototype.value = function () {
  return this.message;
};

UnderlyingSettlMethod.Tag = '1039';

UnderlyingSettlMethod.Type = 'STRING';

module.exports = UnderlyingSettlMethod;