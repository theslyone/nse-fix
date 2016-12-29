var invert = require('invert-obj');

function LastRptRequested (lastRptRequested) {
  this.message = lastRptRequested;
}

LastRptRequested.prototype.value = function () {
  return this.message;
};


LastRptRequested.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

LastRptRequested.Tag = '912';

LastRptRequested.Type = 'BOOLEAN';

LastRptRequested.Values = invert(LastRptRequested.Keys);

module.exports = LastRptRequested;