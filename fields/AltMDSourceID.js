var invert = require('invert-obj');

function AltMDSourceID (altMdsourceId) {
  this.message = altMdsourceId;
}

AltMDSourceID.prototype.value = function () {
  return this.message;
};

AltMDSourceID.Tag = '817';

AltMDSourceID.Type = 'STRING';

module.exports = AltMDSourceID;