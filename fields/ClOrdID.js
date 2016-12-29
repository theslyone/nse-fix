var invert = require('invert-obj');

function ClOrdID (clOrdId) {
  this.message = clOrdId;
}

ClOrdID.prototype.value = function () {
  return this.message;
};

ClOrdID.Tag = '11';

ClOrdID.Type = 'STRING';

module.exports = ClOrdID;