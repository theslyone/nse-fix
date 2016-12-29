var invert = require('invert-obj');

function MidYield (midYield) {
  this.message = midYield;
}

MidYield.prototype.value = function () {
  return this.message;
};

MidYield.Tag = '633';

MidYield.Type = 'PERCENTAGE';

module.exports = MidYield;