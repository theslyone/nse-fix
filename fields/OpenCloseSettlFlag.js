var invert = require('invert-obj');

function OpenCloseSettlFlag (openCloseSettlFlag) {
  this.message = openCloseSettlFlag;
}

OpenCloseSettlFlag.prototype.value = function () {
  return this.message;
};


OpenCloseSettlFlag.Keys = {
  'DAILY_OPEN': '0',
  'SESSION_OPEN': '1',
  'DELIVERY_SETTLEMENT_ENTRY': '2',
  'EXPECTED_ENTRY': '3',
  'ENTRY_FROM_PREVIOUS_BUSINESS_DAY': '4',
  'THEORETICAL_PRICE_VALUE': '5',
};

OpenCloseSettlFlag.Tag = '286';

OpenCloseSettlFlag.Type = 'MULTIPLECHARVALUE';

OpenCloseSettlFlag.Values = invert(OpenCloseSettlFlag.Keys);

module.exports = OpenCloseSettlFlag;