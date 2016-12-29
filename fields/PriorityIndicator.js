var invert = require('invert-obj');

function PriorityIndicator (priorityIndicator) {
  this.message = priorityIndicator;
}

PriorityIndicator.prototype.value = function () {
  return this.message;
};


PriorityIndicator.Keys = {
  'PRIORITY_UNCHANGED': '0',
  'LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE': '1',
};

PriorityIndicator.Tag = '638';

PriorityIndicator.Type = 'INT';

PriorityIndicator.Values = invert(PriorityIndicator.Keys);

module.exports = PriorityIndicator;