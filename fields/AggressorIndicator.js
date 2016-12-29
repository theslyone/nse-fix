var invert = require('invert-obj');

function AggressorIndicator (aggressorIndicator) {
  this.message = aggressorIndicator;
}

AggressorIndicator.prototype.value = function () {
  return this.message;
};


AggressorIndicator.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

AggressorIndicator.Tag = '1057';

AggressorIndicator.Type = 'BOOLEAN';

AggressorIndicator.Values = invert(AggressorIndicator.Keys);

module.exports = AggressorIndicator;