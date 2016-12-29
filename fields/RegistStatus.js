var invert = require('invert-obj');

function RegistStatus (registStatus) {
  this.message = registStatus;
}

RegistStatus.prototype.value = function () {
  return this.message;
};


RegistStatus.Keys = {
  'ACCEPTED': 'A',
  'HELD': 'H',
  'REMINDER': 'N',
  'REJECTED': 'R',
};

RegistStatus.Tag = '506';

RegistStatus.Type = 'CHAR';

RegistStatus.Values = invert(RegistStatus.Keys);

module.exports = RegistStatus;