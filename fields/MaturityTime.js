var invert = require('invert-obj');

function MaturityTime (maturityTime) {
  this.message = maturityTime;
}

MaturityTime.prototype.value = function () {
  return this.message;
};

MaturityTime.Tag = '1079';

MaturityTime.Type = 'TZTIMEONLY';

module.exports = MaturityTime;