var invert = require('invert-obj');

function SettlSessSubID (settlSessSubId) {
  this.message = settlSessSubId;
}

SettlSessSubID.prototype.value = function () {
  return this.message;
};

SettlSessSubID.Tag = '717';

SettlSessSubID.Type = 'STRING';

module.exports = SettlSessSubID;