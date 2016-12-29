var invert = require('invert-obj');

function DerivativeSecurityXMLSchema (derivativeSecurityXmlschema) {
  this.message = derivativeSecurityXmlschema;
}

DerivativeSecurityXMLSchema.prototype.value = function () {
  return this.message;
};

DerivativeSecurityXMLSchema.Tag = '1284';

DerivativeSecurityXMLSchema.Type = 'STRING';

module.exports = DerivativeSecurityXMLSchema;