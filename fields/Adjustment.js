var invert = require('invert-obj');

function Adjustment (adjustment) {
  this.message = adjustment;
}

Adjustment.prototype.value = function () {
  return this.message;
};


Adjustment.Keys = {
  'CANCEL': '1',
  'ERROR': '2',
  'CORRECTION': '3',
};

Adjustment.Tag = '334';

Adjustment.Type = 'INT';

Adjustment.Values = invert(Adjustment.Keys);

module.exports = Adjustment;