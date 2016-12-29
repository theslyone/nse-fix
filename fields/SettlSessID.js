var invert = require('invert-obj');

function SettlSessID (settlSessId) {
  this.message = settlSessId;
}

SettlSessID.prototype.value = function () {
  return this.message;
};


SettlSessID.Keys = {
  'INTRADAY': 'ITD',
  'REGULAR_TRADING_HOURS': 'RTH',
  'ELECTRONIC_TRADING_HOURS': 'ETH',
  'END_OF_DAY': 'EOD',
};

SettlSessID.Tag = '716';

SettlSessID.Type = 'STRING';

SettlSessID.Values = invert(SettlSessID.Keys);

module.exports = SettlSessID;