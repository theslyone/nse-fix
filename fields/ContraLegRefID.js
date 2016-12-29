var invert = require('invert-obj');

function ContraLegRefID (contraLegRefId) {
  this.message = contraLegRefId;
}

ContraLegRefID.prototype.value = function () {
  return this.message;
};

ContraLegRefID.Tag = '655';

ContraLegRefID.Type = 'STRING';

module.exports = ContraLegRefID;