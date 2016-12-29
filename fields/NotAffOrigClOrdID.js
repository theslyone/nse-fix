var invert = require('invert-obj');

function NotAffOrigClOrdID (notAffOrigClOrdId) {
  this.message = notAffOrigClOrdId;
}

NotAffOrigClOrdID.prototype.value = function () {
  return this.message;
};

NotAffOrigClOrdID.Tag = '1372';

NotAffOrigClOrdID.Type = 'STRING';

module.exports = NotAffOrigClOrdID;