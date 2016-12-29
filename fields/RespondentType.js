var invert = require('invert-obj');

function RespondentType (respondentType) {
  this.message = respondentType;
}

RespondentType.prototype.value = function () {
  return this.message;
};


RespondentType.Keys = {
  'ALL_MARKET_PARTICIPANTS': '1',
  'SPECIFIED_MARKET_PARTICIPANTS': '2',
  'ALL_MARKET_MAKERS': '3',
  'PRIMARY_MARKET_MAKER': '4',
};

RespondentType.Tag = '1172';

RespondentType.Type = 'INT';

RespondentType.Values = invert(RespondentType.Keys);

module.exports = RespondentType;