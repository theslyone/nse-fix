var invert = require('invert-obj');

function SecurityXMLSchema (securityXmlschema) {
  this.message = securityXmlschema;
}

SecurityXMLSchema.prototype.value = function () {
  return this.message;
};

SecurityXMLSchema.Tag = '1186';

SecurityXMLSchema.Type = 'STRING';

module.exports = SecurityXMLSchema;