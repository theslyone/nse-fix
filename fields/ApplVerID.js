var invert = require('invert-obj');

function ApplVerID (applVerId) {
  this.message = applVerId;
}

ApplVerID.prototype.value = function () {
  return this.message;
};


ApplVerID.Keys = {
  'FIX27': '0',
  'FIX30': '1',
  'FIX40': '2',
  'FIX41': '3',
  'FIX42': '4',
  'FIX43': '5',
  'FIX44': '6',
  'FIX50': '7',
  'FIX50SP1': '8',
};

ApplVerID.Tag = '1128';

ApplVerID.Type = 'STRING';

ApplVerID.Values = invert(ApplVerID.Keys);

module.exports = ApplVerID;