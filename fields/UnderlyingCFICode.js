var invert = require('invert-obj');

function UnderlyingCFICode (underlyingCficode) {
  this.message = underlyingCficode;
}

UnderlyingCFICode.prototype.value = function () {
  return this.message;
};

UnderlyingCFICode.Tag = '463';

UnderlyingCFICode.Type = 'STRING';

module.exports = UnderlyingCFICode;