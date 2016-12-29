var invert = require('invert-obj');

function SecondaryClOrdID (secondaryClOrdId) {
  this.message = secondaryClOrdId;
}

SecondaryClOrdID.prototype.value = function () {
  return this.message;
};

SecondaryClOrdID.Tag = '526';

SecondaryClOrdID.Type = 'STRING';

module.exports = SecondaryClOrdID;