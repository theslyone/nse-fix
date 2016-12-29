var invert = require('invert-obj');

function PreallocMethod (preallocMethod) {
  this.message = preallocMethod;
}

PreallocMethod.prototype.value = function () {
  return this.message;
};


PreallocMethod.Keys = {
  'PRO_RATA': '0',
  'DO_NOT_PRO_RATA': '1',
};

PreallocMethod.Tag = '591';

PreallocMethod.Type = 'CHAR';

PreallocMethod.Values = invert(PreallocMethod.Keys);

module.exports = PreallocMethod;