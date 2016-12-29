var invert = require('invert-obj');

function LegNumber (legNumber) {
  this.message = legNumber;
}

LegNumber.prototype.value = function () {
  return this.message;
};

LegNumber.Tag = '1152';

LegNumber.Type = 'INT';

module.exports = LegNumber;