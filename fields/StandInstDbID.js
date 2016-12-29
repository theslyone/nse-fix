var invert = require('invert-obj');

function StandInstDbID (standInstDbId) {
  this.message = standInstDbId;
}

StandInstDbID.prototype.value = function () {
  return this.message;
};

StandInstDbID.Tag = '171';

StandInstDbID.Type = 'STRING';

module.exports = StandInstDbID;