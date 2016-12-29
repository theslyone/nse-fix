var invert = require('invert-obj');

function UnderlyingUnitOfMeasure (underlyingUnitOfMeasure) {
  this.message = underlyingUnitOfMeasure;
}

UnderlyingUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingUnitOfMeasure.Tag = '998';

UnderlyingUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingUnitOfMeasure;