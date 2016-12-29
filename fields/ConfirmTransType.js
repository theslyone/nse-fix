var invert = require('invert-obj');

function ConfirmTransType (confirmTransType) {
  this.message = confirmTransType;
}

ConfirmTransType.prototype.value = function () {
  return this.message;
};


ConfirmTransType.Keys = {
  'NEW': '0',
  'REPLACE': '1',
  'CANCEL': '2',
};

ConfirmTransType.Tag = '666';

ConfirmTransType.Type = 'INT';

ConfirmTransType.Values = invert(ConfirmTransType.Keys);

module.exports = ConfirmTransType;