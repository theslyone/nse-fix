var invert = require('invert-obj');

function UnderlyingCapValue (underlyingCapValue) {
  this.message = underlyingCapValue;
}

UnderlyingCapValue.prototype.value = function () {
  return this.message;
};

UnderlyingCapValue.Tag = '1038';

UnderlyingCapValue.Type = 'AMT';

module.exports = UnderlyingCapValue;