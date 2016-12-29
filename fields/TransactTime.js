var invert = require('invert-obj');

function TransactTime (transactTime) {
  this.message = transactTime;
}

TransactTime.prototype.value = function () {
  return this.message;
};

TransactTime.Tag = '60';

TransactTime.Type = 'UTCTIMESTAMP';

module.exports = TransactTime;