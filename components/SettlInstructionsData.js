var DlvyInstGrp = require('../components/DlvyInstGrp');
var SettlDeliveryType = require('../fields/SettlDeliveryType');
var StandInstDbType = require('../fields/StandInstDbType');
var StandInstDbName = require('../fields/StandInstDbName');
var StandInstDbID = require('../fields/StandInstDbID');

function SettlInstructionsData (settlInstructionsData) {
  this.message = settlInstructionsData;
}
/* component */
SettlInstructionsData.prototype.dlvyInstGrp = function () {
  return this.message.groups[DlvyInstGrp.Tag]
    .map(function (dlvyInstGrp) {
      return new DlvyInstGrp(dlvyInstGrp);
  });
};

/* field */
SettlInstructionsData.prototype.settlDeliveryType = function () {
  return new SettlDeliveryType(this.message.tags[SettlDeliveryType.Tag]);
};

/* field */
SettlInstructionsData.prototype.standInstDbType = function () {
  return new StandInstDbType(this.message.tags[StandInstDbType.Tag]);
};

/* field */
SettlInstructionsData.prototype.standInstDbName = function () {
  return new StandInstDbName(this.message.tags[StandInstDbName.Tag]);
};

/* field */
SettlInstructionsData.prototype.standInstDbId = function () {
  return new StandInstDbID(this.message.tags[StandInstDbID.Tag]);
};



SettlInstructionsData.Tag = '172';

module.exports = SettlInstructionsData;