var invert = require('invert-obj');

function MatchStatus (matchStatus) {
  this.message = matchStatus;
}

MatchStatus.prototype.value = function () {
  return this.message;
};


MatchStatus.Keys = {
  'COMPARED_MATCHED_OR_AFFIRMED': '0',
  'UNCOMPARED_UNMATCHED_OR_UNAFFIRED': '1',
  'ADVISORY_OR_ALERT': '2',
};

MatchStatus.Tag = '573';

MatchStatus.Type = 'CHAR';

MatchStatus.Values = invert(MatchStatus.Keys);

module.exports = MatchStatus;