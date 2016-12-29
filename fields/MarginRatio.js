var invert = require('invert-obj');

function MarginRatio (marginRatio) {
  this.message = marginRatio;
}

MarginRatio.prototype.value = function () {
  return this.message;
};

MarginRatio.Tag = '898';

MarginRatio.Type = 'PERCENTAGE';

module.exports = MarginRatio;