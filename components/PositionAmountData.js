var NoPosAmt = require('../fields/NoPosAmt');
var PosAmtType = require('../fields/PosAmtType');
var PosAmt = require('../fields/PosAmt');
var PositionCurrency = require('../fields/PositionCurrency');

function PositionAmountData (positionAmountData) {
  this.message = positionAmountData;
}

/* group */

/* field */
PositionAmountData.prototype.posAmtType = function () {
  return new PosAmtType(this.message.tags[PosAmtType.Tag]);
};

/* field */
PositionAmountData.prototype.posAmt = function () {
  return new PosAmt(this.message.tags[PosAmt.Tag]);
};

/* field */
PositionAmountData.prototype.positionCurrency = function () {
  return new PositionCurrency(this.message.tags[PositionCurrency.Tag]);
};

/* end group */

PositionAmountData.Tag = '753';

module.exports = PositionAmountData;