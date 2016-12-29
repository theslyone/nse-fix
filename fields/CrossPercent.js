var invert = require('invert-obj');

function CrossPercent (crossPercent) {
  this.message = crossPercent;
}

CrossPercent.prototype.value = function () {
  return this.message;
};

CrossPercent.Tag = '413';

CrossPercent.Type = 'PERCENTAGE';

module.exports = CrossPercent;