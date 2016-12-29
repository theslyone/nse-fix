var invert = require('invert-obj');

function HostCrossID (hostCrossId) {
  this.message = hostCrossId;
}

HostCrossID.prototype.value = function () {
  return this.message;
};

HostCrossID.Tag = '961';

HostCrossID.Type = 'STRING';

module.exports = HostCrossID;