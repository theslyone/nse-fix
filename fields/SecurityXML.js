var invert = require('invert-obj');

function SecurityXML (securityXml) {
  this.message = securityXml;
}

SecurityXML.prototype.value = function () {
  return this.message;
};

SecurityXML.Tag = '1185';

SecurityXML.Type = 'XMLDATA';

module.exports = SecurityXML;