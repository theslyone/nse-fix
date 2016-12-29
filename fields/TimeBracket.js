var invert = require('invert-obj');

function TimeBracket (timeBracket) {
  this.message = timeBracket;
}

TimeBracket.prototype.value = function () {
  return this.message;
};

TimeBracket.Tag = '943';

TimeBracket.Type = 'STRING';

module.exports = TimeBracket;