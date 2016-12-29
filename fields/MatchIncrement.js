var invert = require('invert-obj');

function MatchIncrement (matchIncrement) {
  this.message = matchIncrement;
}

MatchIncrement.prototype.value = function () {
  return this.message;
};

MatchIncrement.Tag = '1089';

MatchIncrement.Type = 'QTY';

module.exports = MatchIncrement;