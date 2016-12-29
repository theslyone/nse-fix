var invert = require('invert-obj');

function DerivativeSecurityXMLLen (derivativeSecurityXmllen) {
  this.message = derivativeSecurityXmllen;
}

DerivativeSecurityXMLLen.prototype.value = function () {
  return this.message;
};

DerivativeSecurityXMLLen.Tag = '1282';

DerivativeSecurityXMLLen.Type = 'LENGTH';

module.exports = DerivativeSecurityXMLLen;