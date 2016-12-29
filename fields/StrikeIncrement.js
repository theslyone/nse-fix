var invert = require('invert-obj');

function StrikeIncrement (strikeIncrement) {
  this.message = strikeIncrement;
}

StrikeIncrement.prototype.value = function () {
  return this.message;
};

StrikeIncrement.Tag = '1204';

StrikeIncrement.Type = 'FLOAT';

module.exports = StrikeIncrement;