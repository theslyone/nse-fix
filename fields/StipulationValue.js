var invert = require('invert-obj');

function StipulationValue (stipulationValue) {
  this.message = stipulationValue;
}

StipulationValue.prototype.value = function () {
  return this.message;
};

StipulationValue.Tag = '234';

StipulationValue.Type = 'STRING';

module.exports = StipulationValue;