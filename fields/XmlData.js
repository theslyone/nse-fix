var invert = require('invert-obj');

function XmlData (xmlData) {
  this.message = xmlData;
}

XmlData.prototype.value = function () {
  return this.message;
};

XmlData.Tag = '213';

XmlData.Type = 'DATA';

module.exports = XmlData;