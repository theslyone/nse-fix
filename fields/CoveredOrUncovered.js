var invert = require('invert-obj');

function CoveredOrUncovered (coveredOrUncovered) {
  this.message = coveredOrUncovered;
}

CoveredOrUncovered.prototype.value = function () {
  return this.message;
};


CoveredOrUncovered.Keys = {
  'COVERED': '0',
  'UNCOVERED': '1',
};

CoveredOrUncovered.Tag = '203';

CoveredOrUncovered.Type = 'INT';

CoveredOrUncovered.Values = invert(CoveredOrUncovered.Keys);

module.exports = CoveredOrUncovered;