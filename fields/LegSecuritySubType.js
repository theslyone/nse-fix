var invert = require('invert-obj');

function LegSecuritySubType (legSecuritySubType) {
  this.message = legSecuritySubType;
}

LegSecuritySubType.prototype.value = function () {
  return this.message;
};

LegSecuritySubType.Tag = '764';

LegSecuritySubType.Type = 'STRING';

module.exports = LegSecuritySubType;