var invert = require('invert-obj');

function TierCode (tierCode) {
  this.message = tierCode;
}

TierCode.prototype.value = function () {
  return this.message;
};

TierCode.Tag = '994';

TierCode.Type = 'STRING';

module.exports = TierCode;