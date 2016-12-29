var invert = require('invert-obj');

function HandlInst (handlInst) {
  this.message = handlInst;
}

HandlInst.prototype.value = function () {
  return this.message;
};


HandlInst.Keys = {
  'AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION': '1',
  'AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK': '2',
  'MANUAL_ORDER_BEST_EXECUTION': '3',
};

HandlInst.Tag = '21';

HandlInst.Type = 'CHAR';

HandlInst.Values = invert(HandlInst.Keys);

module.exports = HandlInst;