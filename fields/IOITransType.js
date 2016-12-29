var invert = require('invert-obj');

function IOITransType (ioitransType) {
  this.message = ioitransType;
}

IOITransType.prototype.value = function () {
  return this.message;
};


IOITransType.Keys = {
  'CANCEL': 'C',
  'NEW': 'N',
  'REPLACE': 'R',
};

IOITransType.Tag = '28';

IOITransType.Type = 'CHAR';

IOITransType.Values = invert(IOITransType.Keys);

module.exports = IOITransType;