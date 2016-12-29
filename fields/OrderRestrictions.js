var invert = require('invert-obj');

function OrderRestrictions (orderRestrictions) {
  this.message = orderRestrictions;
}

OrderRestrictions.prototype.value = function () {
  return this.message;
};


OrderRestrictions.Keys = {
  'PROGRAM_TRADE': '1',
  'INDEX_ARBITRAGE': '2',
  'NON_INDEX_ARBITRAGE': '3',
  'COMPETING_MARKET_MAKER': '4',
  'ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY': '5',
  'ACTING_AS_MARKET_MAKER_OF_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SEUCIRTY': '6',
  'FOREIGN_ENTITY': '7',
  'EXTERNAL_MARKET_PARTICIPANT': '8',
  'EXTNERAL_INTER_CONNECTED_MARKET_LINKAGE': '9',
  'RISKLESS_ARBITRAGE': 'A',
  'ISSUER_HOLDING': 'B',
  'ISSUE_PRICE_STABILIZATION': 'C',
  'NON_ALGORITHMIC': 'D',
  'ALGORITHMIC': 'E',
};

OrderRestrictions.Tag = '529';

OrderRestrictions.Type = 'MULTIPLECHARVALUE';

OrderRestrictions.Values = invert(OrderRestrictions.Keys);

module.exports = OrderRestrictions;