var invert = require('invert-obj');

function LastNetworkResponseID (lastNetworkResponseId) {
  this.message = lastNetworkResponseId;
}

LastNetworkResponseID.prototype.value = function () {
  return this.message;
};

LastNetworkResponseID.Tag = '934';

LastNetworkResponseID.Type = 'STRING';

module.exports = LastNetworkResponseID;