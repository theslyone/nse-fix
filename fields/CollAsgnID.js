var invert = require('invert-obj');

function CollAsgnID (collAsgnId) {
  this.message = collAsgnId;
}

CollAsgnID.prototype.value = function () {
  return this.message;
};

CollAsgnID.Tag = '902';

CollAsgnID.Type = 'STRING';

module.exports = CollAsgnID;