var invert = require('invert-obj');

function AllocMethod (allocMethod) {
  this.message = allocMethod;
}

AllocMethod.prototype.value = function () {
  return this.message;
};


AllocMethod.Keys = {
  'AUTOMATIC': '1',
  'GUARANTOR': '2',
  'MANUAL': '3',
};

AllocMethod.Tag = '1002';

AllocMethod.Type = 'INT';

AllocMethod.Values = invert(AllocMethod.Keys);

module.exports = AllocMethod;