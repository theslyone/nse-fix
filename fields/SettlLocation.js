var invert = require('invert-obj');

function SettlLocation (settlLocation) {
  this.message = settlLocation;
}

SettlLocation.prototype.value = function () {
  return this.message;
};


SettlLocation.Keys = {
  'CEDEL': 'CED',
  'DEPOSITORY_TRUST_COMPANY': 'DTC',
  'EURO_CLEAR': 'EUR',
  'FEDERAL_BOOK_ENTRY': 'FED',
  'LOCAL_MARKET_SETTLE_LOCATION': 'ISO_Country_Code',
  'PHYSICAL': 'PNY',
  'PARTICIPANT_TRUST_COMPANY': 'PTC',
};

SettlLocation.Tag = '166';

SettlLocation.Type = 'STRING';

SettlLocation.Values = invert(SettlLocation.Keys);

module.exports = SettlLocation;