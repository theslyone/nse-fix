var invert = require('invert-obj');

function StrikeRuleID (strikeRuleId) {
  this.message = strikeRuleId;
}

StrikeRuleID.prototype.value = function () {
  return this.message;
};

StrikeRuleID.Tag = '1223';

StrikeRuleID.Type = 'STRING';

module.exports = StrikeRuleID;