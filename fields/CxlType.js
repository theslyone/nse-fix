var invert = require('invert-obj');

function CxlType (cxlType) {
  this.message = cxlType;
}

CxlType.prototype.value = function () {
  return this.message;
};

CxlType.Tag = '125';

CxlType.Type = 'CHAR';

module.exports = CxlType;