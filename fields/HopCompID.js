var invert = require('invert-obj');

function HopCompID (hopCompId) {
  this.message = hopCompId;
}

HopCompID.prototype.value = function () {
  return this.message;
};

HopCompID.Tag = '628';

HopCompID.Type = 'STRING';

module.exports = HopCompID;