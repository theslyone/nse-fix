var SecurityXMLLen = require('../fields/SecurityXMLLen');
var SecurityXML = require('../fields/SecurityXML');
var SecurityXMLSchema = require('../fields/SecurityXMLSchema');

function SecurityXML (securityXml) {
  this.message = securityXml;
}
/* field */
SecurityXML.prototype.securityXmllen = function () {
  return new SecurityXMLLen(this.message.tags[SecurityXMLLen.Tag]);
};

/* field */
SecurityXML.prototype.securityXml = function () {
  return new SecurityXML(this.message.tags[SecurityXML.Tag]);
};

/* field */
SecurityXML.prototype.securityXmlschema = function () {
  return new SecurityXMLSchema(this.message.tags[SecurityXMLSchema.Tag]);
};



SecurityXML.Tag = '1184';

module.exports = SecurityXML;