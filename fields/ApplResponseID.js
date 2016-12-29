var invert = require('invert-obj');

function ApplResponseID (applResponseId) {
  this.message = applResponseId;
}

ApplResponseID.prototype.value = function () {
  return this.message;
};

ApplResponseID.Tag = '1353';

ApplResponseID.Type = 'STRING';

module.exports = ApplResponseID;