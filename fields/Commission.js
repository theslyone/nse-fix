var invert = require('invert-obj');

function Commission (commission) {
  this.message = commission;
}

Commission.prototype.value = function () {
  return this.message;
};

Commission.Tag = '12';

Commission.Type = 'AMT';

module.exports = Commission;