var invert = require('invert-obj');

function ConfirmType (confirmType) {
  this.message = confirmType;
}

ConfirmType.prototype.value = function () {
  return this.message;
};


ConfirmType.Keys = {
  'STATUS': '1',
  'CONFIRMATION': '2',
  'CONFIRMATION_REQUEST_REJECTED': '3',
};

ConfirmType.Tag = '773';

ConfirmType.Type = 'INT';

ConfirmType.Values = invert(ConfirmType.Keys);

module.exports = ConfirmType;