var invert = require('invert-obj');

function FairValue (fairValue) {
  this.message = fairValue;
}

FairValue.prototype.value = function () {
  return this.message;
};

FairValue.Tag = '406';

FairValue.Type = 'AMT';

module.exports = FairValue;