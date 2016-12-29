var invert = require('invert-obj');

function MaturityRuleID (maturityRuleId) {
  this.message = maturityRuleId;
}

MaturityRuleID.prototype.value = function () {
  return this.message;
};

MaturityRuleID.Tag = '1222';

MaturityRuleID.Type = 'STRING';

module.exports = MaturityRuleID;