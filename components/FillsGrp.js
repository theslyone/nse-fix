var NoFills = require('../fields/NoFills');
var NestedParties4 = require('../components/NestedParties4');
var FillExecID = require('../fields/FillExecID');
var FillPx = require('../fields/FillPx');
var FillQty = require('../fields/FillQty');

function FillsGrp (fillsGrp) {
  this.message = fillsGrp;
}

/* group */

/* component */
FillsGrp.prototype.nestedParties4 = function () {
  return this.message.groups[NestedParties4.Tag]
    .map(function (nestedParties4) {
      return new NestedParties4(nestedParties4);
  });
};

/* field */
FillsGrp.prototype.fillExecId = function () {
  return new FillExecID(this.message.tags[FillExecID.Tag]);
};

/* field */
FillsGrp.prototype.fillPx = function () {
  return new FillPx(this.message.tags[FillPx.Tag]);
};

/* field */
FillsGrp.prototype.fillQty = function () {
  return new FillQty(this.message.tags[FillQty.Tag]);
};

/* end group */

FillsGrp.Tag = '1362';

module.exports = FillsGrp;