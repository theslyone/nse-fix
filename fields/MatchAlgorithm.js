var invert = require('invert-obj');

function MatchAlgorithm (matchAlgorithm) {
  this.message = matchAlgorithm;
}

MatchAlgorithm.prototype.value = function () {
  return this.message;
};

MatchAlgorithm.Tag = '1142';

MatchAlgorithm.Type = 'STRING';

module.exports = MatchAlgorithm;