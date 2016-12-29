var invert = require('invert-obj');

function LegStateOrProvinceOfIssue (legStateOrProvinceOfIssue) {
  this.message = legStateOrProvinceOfIssue;
}

LegStateOrProvinceOfIssue.prototype.value = function () {
  return this.message;
};

LegStateOrProvinceOfIssue.Tag = '597';

LegStateOrProvinceOfIssue.Type = 'STRING';

module.exports = LegStateOrProvinceOfIssue;