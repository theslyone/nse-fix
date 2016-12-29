var invert = require('invert-obj');

function RegistTransType (registTransType) {
  this.message = registTransType;
}

RegistTransType.prototype.value = function () {
  return this.message;
};


RegistTransType.Keys = {
  'NEW': '0',
  'REPLACE': '1',
  'CANCEL': '2',
};

RegistTransType.Tag = '514';

RegistTransType.Type = 'CHAR';

RegistTransType.Values = invert(RegistTransType.Keys);

module.exports = RegistTransType;