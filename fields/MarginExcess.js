var invert = require('invert-obj');

function MarginExcess (marginExcess) {
  this.message = marginExcess;
}

MarginExcess.prototype.value = function () {
  return this.message;
};

MarginExcess.Tag = '899';

MarginExcess.Type = 'AMT';

module.exports = MarginExcess;