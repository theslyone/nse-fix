var DerivativeSecurityXMLLen = require('../fields/DerivativeSecurityXMLLen');
var DerivativeSecurityXML = require('../fields/DerivativeSecurityXML');
var DerivativeSecurityXMLSchema = require('../fields/DerivativeSecurityXMLSchema');

function DerivativeSecurityXML (derivativeSecurityXml) {
  this.message = derivativeSecurityXml;
}
/* field */
DerivativeSecurityXML.prototype.derivativeSecurityXmllen = function () {
  return new DerivativeSecurityXMLLen(this.message.tags[DerivativeSecurityXMLLen.Tag]);
};

/* field */
DerivativeSecurityXML.prototype.derivativeSecurityXml = function () {
  return new DerivativeSecurityXML(this.message.tags[DerivativeSecurityXML.Tag]);
};

/* field */
DerivativeSecurityXML.prototype.derivativeSecurityXmlschema = function () {
  return new DerivativeSecurityXMLSchema(this.message.tags[DerivativeSecurityXMLSchema.Tag]);
};



DerivativeSecurityXML.Tag = '1282';

module.exports = DerivativeSecurityXML;