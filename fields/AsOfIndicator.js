var invert = require('invert-obj');

function AsOfIndicator (asOfIndicator) {
  this.message = asOfIndicator;
}

AsOfIndicator.prototype.value = function () {
  return this.message;
};


AsOfIndicator.Keys = {
  'FALSE': '0',
  'TRUE': '1',
};

AsOfIndicator.Tag = '1015';

AsOfIndicator.Type = 'CHAR';

AsOfIndicator.Values = invert(AsOfIndicator.Keys);

module.exports = AsOfIndicator;