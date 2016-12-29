var invert = require('invert-obj');

function OnBehalfOfLocationID (onBehalfOfLocationId) {
  this.message = onBehalfOfLocationId;
}

OnBehalfOfLocationID.prototype.value = function () {
  return this.message;
};

OnBehalfOfLocationID.Tag = '144';

OnBehalfOfLocationID.Type = 'STRING';

module.exports = OnBehalfOfLocationID;