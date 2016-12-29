var NoDlvyInst = require('../fields/NoDlvyInst');
var SettlParties = require('../components/SettlParties');
var SettlInstSource = require('../fields/SettlInstSource');
var DlvyInstType = require('../fields/DlvyInstType');

function DlvyInstGrp (dlvyInstGrp) {
  this.message = dlvyInstGrp;
}

/* group */

/* component */
DlvyInstGrp.prototype.settlParties = function () {
  return this.message.groups[SettlParties.Tag]
    .map(function (settlParties) {
      return new SettlParties(settlParties);
  });
};

/* field */
DlvyInstGrp.prototype.settlInstSource = function () {
  return new SettlInstSource(this.message.tags[SettlInstSource.Tag]);
};

/* field */
DlvyInstGrp.prototype.dlvyInstType = function () {
  return new DlvyInstType(this.message.tags[DlvyInstType.Tag]);
};

/* end group */

DlvyInstGrp.Tag = '85';

module.exports = DlvyInstGrp;