var invert = require('invert-obj');

function UnderlyingCPRegType (underlyingCpregType) {
  this.message = underlyingCpregType;
}

UnderlyingCPRegType.prototype.value = function () {
  return this.message;
};

UnderlyingCPRegType.Tag = '878';

UnderlyingCPRegType.Type = 'STRING';

module.exports = UnderlyingCPRegType;