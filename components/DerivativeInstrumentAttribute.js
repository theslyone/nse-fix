var NoDerivativeInstrAttrib = require('../fields/NoDerivativeInstrAttrib');
var DerivativeInstrAttribType = require('../fields/DerivativeInstrAttribType');
var DerivativeInstrAttribValue = require('../fields/DerivativeInstrAttribValue');

function DerivativeInstrumentAttribute (derivativeInstrumentAttribute) {
  this.message = derivativeInstrumentAttribute;
}

/* group */

/* field */
DerivativeInstrumentAttribute.prototype.derivativeInstrAttribType = function () {
  return new DerivativeInstrAttribType(this.message.tags[DerivativeInstrAttribType.Tag]);
};

/* field */
DerivativeInstrumentAttribute.prototype.derivativeInstrAttribValue = function () {
  return new DerivativeInstrAttribValue(this.message.tags[DerivativeInstrAttribValue.Tag]);
};

/* end group */

DerivativeInstrumentAttribute.Tag = '1311';

module.exports = DerivativeInstrumentAttribute;