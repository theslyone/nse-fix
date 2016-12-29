var invert = require('invert-obj');

function StrikeValue (strikeValue) {
  this.message = strikeValue;
}

StrikeValue.prototype.value = function () {
  return this.message;
};

StrikeValue.Tag = '968';

StrikeValue.Type = 'FLOAT';

module.exports = StrikeValue;