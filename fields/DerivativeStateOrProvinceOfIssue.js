var invert = require('invert-obj');

function DerivativeStateOrProvinceOfIssue (derivativeStateOrProvinceOfIssue) {
  this.message = derivativeStateOrProvinceOfIssue;
}

DerivativeStateOrProvinceOfIssue.prototype.value = function () {
  return this.message;
};

DerivativeStateOrProvinceOfIssue.Tag = '1259';

DerivativeStateOrProvinceOfIssue.Type = 'STRING';

module.exports = DerivativeStateOrProvinceOfIssue;