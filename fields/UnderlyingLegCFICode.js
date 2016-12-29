var invert = require('invert-obj');

function UnderlyingLegCFICode (underlyingLegCficode) {
  this.message = underlyingLegCficode;
}

UnderlyingLegCFICode.prototype.value = function () {
  return this.message;
};

UnderlyingLegCFICode.Tag = '1344';

UnderlyingLegCFICode.Type = 'STRING';

module.exports = UnderlyingLegCFICode;