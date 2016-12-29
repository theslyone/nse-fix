var invert = require('invert-obj');

function UnderlyingStateOrProvinceOfIssue (underlyingStateOrProvinceOfIssue) {
  this.message = underlyingStateOrProvinceOfIssue;
}

UnderlyingStateOrProvinceOfIssue.prototype.value = function () {
  return this.message;
};

UnderlyingStateOrProvinceOfIssue.Tag = '593';

UnderlyingStateOrProvinceOfIssue.Type = 'STRING';

module.exports = UnderlyingStateOrProvinceOfIssue;