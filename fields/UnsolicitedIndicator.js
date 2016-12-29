var invert = require('invert-obj');

function UnsolicitedIndicator (unsolicitedIndicator) {
  this.message = unsolicitedIndicator;
}

UnsolicitedIndicator.prototype.value = function () {
  return this.message;
};


UnsolicitedIndicator.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

UnsolicitedIndicator.Tag = '325';

UnsolicitedIndicator.Type = 'BOOLEAN';

UnsolicitedIndicator.Values = invert(UnsolicitedIndicator.Keys);

module.exports = UnsolicitedIndicator;