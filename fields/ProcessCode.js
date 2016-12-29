var invert = require('invert-obj');

function ProcessCode (processCode) {
  this.message = processCode;
}

ProcessCode.prototype.value = function () {
  return this.message;
};


ProcessCode.Keys = {
  'REGULAR': '0',
  'SOFT_DOLLAR': '1',
  'STEP_IN': '2',
  'STEP_OUT': '3',
  'SOFT_DOLLAR_STEP_IN': '4',
  'SOFT_DOLLAR_STEP_OUT': '5',
  'PLAN_SPONSOR': '6',
};

ProcessCode.Tag = '81';

ProcessCode.Type = 'CHAR';

ProcessCode.Values = invert(ProcessCode.Keys);

module.exports = ProcessCode;