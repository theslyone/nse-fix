var invert = require('invert-obj');

function OnBehalfOfCompID (onBehalfOfCompId) {
  this.message = onBehalfOfCompId;
}

OnBehalfOfCompID.prototype.value = function () {
  return this.message;
};

OnBehalfOfCompID.Tag = '115';

OnBehalfOfCompID.Type = 'STRING';

module.exports = OnBehalfOfCompID;