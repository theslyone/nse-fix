var invert = require('invert-obj');

function DerivativeSecurityXML (derivativeSecurityXml) {
  this.message = derivativeSecurityXml;
}

DerivativeSecurityXML.prototype.value = function () {
  return this.message;
};

DerivativeSecurityXML.Tag = '1283';

DerivativeSecurityXML.Type = 'DATA';

module.exports = DerivativeSecurityXML;