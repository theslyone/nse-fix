var invert = require('invert-obj');

function StateOrProvinceOfIssue (stateOrProvinceOfIssue) {
  this.message = stateOrProvinceOfIssue;
}

StateOrProvinceOfIssue.prototype.value = function () {
  return this.message;
};

StateOrProvinceOfIssue.Tag = '471';

StateOrProvinceOfIssue.Type = 'STRING';

module.exports = StateOrProvinceOfIssue;