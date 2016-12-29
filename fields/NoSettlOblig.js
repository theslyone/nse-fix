var invert = require('invert-obj');

function NoSettlOblig (noSettlOblig) {
  this.message = noSettlOblig;
}

NoSettlOblig.prototype.value = function () {
  return this.message;
};

NoSettlOblig.Tag = '1165';

NoSettlOblig.Type = 'NUMINGROUP';

module.exports = NoSettlOblig;