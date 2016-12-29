var invert = require('invert-obj');

function SecurityXMLLen (securityXmllen) {
  this.message = securityXmllen;
}

SecurityXMLLen.prototype.value = function () {
  return this.message;
};

SecurityXMLLen.Tag = '1184';

SecurityXMLLen.Type = 'LENGTH';

module.exports = SecurityXMLLen;