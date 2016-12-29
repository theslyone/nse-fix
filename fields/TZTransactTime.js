var invert = require('invert-obj');

function TZTransactTime (tztransactTime) {
  this.message = tztransactTime;
}

TZTransactTime.prototype.value = function () {
  return this.message;
};

TZTransactTime.Tag = '1132';

TZTransactTime.Type = 'TZTIMESTAMP';

module.exports = TZTransactTime;