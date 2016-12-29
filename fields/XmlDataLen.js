var invert = require('invert-obj');

function XmlDataLen (xmlDataLen) {
  this.message = xmlDataLen;
}

XmlDataLen.prototype.value = function () {
  return this.message;
};

XmlDataLen.Tag = '212';

XmlDataLen.Type = 'LENGTH';

module.exports = XmlDataLen;