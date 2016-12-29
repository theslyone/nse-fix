var invert = require('invert-obj');

function LegCFICode (legCficode) {
  this.message = legCficode;
}

LegCFICode.prototype.value = function () {
  return this.message;
};

LegCFICode.Tag = '608';

LegCFICode.Type = 'STRING';

module.exports = LegCFICode;