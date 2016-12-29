var invert = require('invert-obj');

function ListExecInstType (listExecInstType) {
  this.message = listExecInstType;
}

ListExecInstType.prototype.value = function () {
  return this.message;
};


ListExecInstType.Keys = {
  'IMMEDIATE': '1',
  'WAIT_FOR_EXECUT_INSTRUCTION': '2',
  'EXCHANGE_SWITCH_CIV_ORDER_3': '3',
  'EXCHANGE_SWITCH_CIV_ORDER_4': '4',
  'EXCHANGE_SWITCH_CIV_ORDER_5': '5',
};

ListExecInstType.Tag = '433';

ListExecInstType.Type = 'CHAR';

ListExecInstType.Values = invert(ListExecInstType.Keys);

module.exports = ListExecInstType;