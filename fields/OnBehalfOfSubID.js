var invert = require('invert-obj');

function OnBehalfOfSubID (onBehalfOfSubId) {
  this.message = onBehalfOfSubId;
}

OnBehalfOfSubID.prototype.value = function () {
  return this.message;
};

OnBehalfOfSubID.Tag = '116';

OnBehalfOfSubID.Type = 'STRING';

module.exports = OnBehalfOfSubID;