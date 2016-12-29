var invert = require('invert-obj');

function WorkingIndicator (workingIndicator) {
  this.message = workingIndicator;
}

WorkingIndicator.prototype.value = function () {
  return this.message;
};


WorkingIndicator.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

WorkingIndicator.Tag = '636';

WorkingIndicator.Type = 'BOOLEAN';

WorkingIndicator.Values = invert(WorkingIndicator.Keys);

module.exports = WorkingIndicator;