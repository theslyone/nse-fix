var invert = require('invert-obj');

function ValueOfFutures (valueOfFutures) {
  this.message = valueOfFutures;
}

ValueOfFutures.prototype.value = function () {
  return this.message;
};

ValueOfFutures.Tag = '408';

ValueOfFutures.Type = 'AMT';

module.exports = ValueOfFutures;