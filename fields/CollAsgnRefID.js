var invert = require('invert-obj');

function CollAsgnRefID (collAsgnRefId) {
  this.message = collAsgnRefId;
}

CollAsgnRefID.prototype.value = function () {
  return this.message;
};

CollAsgnRefID.Tag = '907';

CollAsgnRefID.Type = 'STRING';

module.exports = CollAsgnRefID;