var invert = require('invert-obj');

function OpenInterest (openInterest) {
  this.message = openInterest;
}

OpenInterest.prototype.value = function () {
  return this.message;
};

OpenInterest.Tag = '746';

OpenInterest.Type = 'AMT';

module.exports = OpenInterest;