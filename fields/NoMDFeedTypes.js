var invert = require('invert-obj');

function NoMDFeedTypes (noMdfeedTypes) {
  this.message = noMdfeedTypes;
}

NoMDFeedTypes.prototype.value = function () {
  return this.message;
};

NoMDFeedTypes.Tag = '1141';

NoMDFeedTypes.Type = 'NUMINGROUP';

module.exports = NoMDFeedTypes;