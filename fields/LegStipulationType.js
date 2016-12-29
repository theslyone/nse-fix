var invert = require('invert-obj');

function LegStipulationType (legStipulationType) {
  this.message = legStipulationType;
}

LegStipulationType.prototype.value = function () {
  return this.message;
};

LegStipulationType.Tag = '688';

LegStipulationType.Type = 'STRING';

module.exports = LegStipulationType;