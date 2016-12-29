var invert = require('invert-obj');

function OrigClOrdID (origClOrdId) {
  this.message = origClOrdId;
}

OrigClOrdID.prototype.value = function () {
  return this.message;
};

OrigClOrdID.Tag = '41';

OrigClOrdID.Type = 'STRING';

module.exports = OrigClOrdID;