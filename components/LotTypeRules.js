var NoLotTypeRules = require('../fields/NoLotTypeRules');
var LotType = require('../fields/LotType');
var MinLotSize = require('../fields/MinLotSize');

function LotTypeRules (lotTypeRules) {
  this.message = lotTypeRules;
}

/* group */

/* field */
LotTypeRules.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
LotTypeRules.prototype.minLotSize = function () {
  return new MinLotSize(this.message.tags[MinLotSize.Tag]);
};

/* end group */

LotTypeRules.Tag = '1234';

module.exports = LotTypeRules;