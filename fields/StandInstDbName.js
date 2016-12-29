var invert = require('invert-obj');

function StandInstDbName (standInstDbName) {
  this.message = standInstDbName;
}

StandInstDbName.prototype.value = function () {
  return this.message;
};

StandInstDbName.Tag = '170';

StandInstDbName.Type = 'STRING';

module.exports = StandInstDbName;