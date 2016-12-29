var invert = require('invert-obj');

function LegSecurityID (legSecurityId) {
  this.message = legSecurityId;
}

LegSecurityID.prototype.value = function () {
  return this.message;
};

LegSecurityID.Tag = '602';

LegSecurityID.Type = 'STRING';

module.exports = LegSecurityID;