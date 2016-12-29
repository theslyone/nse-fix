var invert = require('invert-obj');

function LegStipulationValue (legStipulationValue) {
  this.message = legStipulationValue;
}

LegStipulationValue.prototype.value = function () {
  return this.message;
};

LegStipulationValue.Tag = '689';

LegStipulationValue.Type = 'STRING';

module.exports = LegStipulationValue;