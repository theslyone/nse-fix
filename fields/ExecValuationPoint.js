var invert = require('invert-obj');

function ExecValuationPoint (execValuationPoint) {
  this.message = execValuationPoint;
}

ExecValuationPoint.prototype.value = function () {
  return this.message;
};

ExecValuationPoint.Tag = '515';

ExecValuationPoint.Type = 'UTCTIMESTAMP';

module.exports = ExecValuationPoint;