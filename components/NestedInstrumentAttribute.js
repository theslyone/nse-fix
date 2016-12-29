var NoNestedInstrAttrib = require('../fields/NoNestedInstrAttrib');
var NestedInstrAttribType = require('../fields/NestedInstrAttribType');
var NestedInstrAttribValue = require('../fields/NestedInstrAttribValue');

function NestedInstrumentAttribute (nestedInstrumentAttribute) {
  this.message = nestedInstrumentAttribute;
}

/* group */

/* field */
NestedInstrumentAttribute.prototype.nestedInstrAttribType = function () {
  return new NestedInstrAttribType(this.message.tags[NestedInstrAttribType.Tag]);
};

/* field */
NestedInstrumentAttribute.prototype.nestedInstrAttribValue = function () {
  return new NestedInstrAttribValue(this.message.tags[NestedInstrAttribValue.Tag]);
};

/* end group */

NestedInstrumentAttribute.Tag = '1312';

module.exports = NestedInstrumentAttribute;