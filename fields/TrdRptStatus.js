var invert = require('invert-obj');

function TrdRptStatus (trdRptStatus) {
  this.message = trdRptStatus;
}

TrdRptStatus.prototype.value = function () {
  return this.message;
};


TrdRptStatus.Keys = {
  'ACCEPTED': '0',
  'REJECTED': '1',
  'ACCEPTED_WITH_ERRORS': '3',
};

TrdRptStatus.Tag = '939';

TrdRptStatus.Type = 'INT';

TrdRptStatus.Values = invert(TrdRptStatus.Keys);

module.exports = TrdRptStatus;