var PegOffsetValue = require('../fields/PegOffsetValue');
var PegMoveType = require('../fields/PegMoveType');
var PegOffsetType = require('../fields/PegOffsetType');
var PegLimitType = require('../fields/PegLimitType');
var PegRoundDirection = require('../fields/PegRoundDirection');
var PegScope = require('../fields/PegScope');
var PegPriceType = require('../fields/PegPriceType');
var PegSecurityIDSource = require('../fields/PegSecurityIDSource');
var PegSecurityID = require('../fields/PegSecurityID');
var PegSymbol = require('../fields/PegSymbol');
var PegSecurityDesc = require('../fields/PegSecurityDesc');

function PegInstructions (pegInstructions) {
  this.message = pegInstructions;
}
/* field */
PegInstructions.prototype.pegOffsetValue = function () {
  return new PegOffsetValue(this.message.tags[PegOffsetValue.Tag]);
};

/* field */
PegInstructions.prototype.pegMoveType = function () {
  return new PegMoveType(this.message.tags[PegMoveType.Tag]);
};

/* field */
PegInstructions.prototype.pegOffsetType = function () {
  return new PegOffsetType(this.message.tags[PegOffsetType.Tag]);
};

/* field */
PegInstructions.prototype.pegLimitType = function () {
  return new PegLimitType(this.message.tags[PegLimitType.Tag]);
};

/* field */
PegInstructions.prototype.pegRoundDirection = function () {
  return new PegRoundDirection(this.message.tags[PegRoundDirection.Tag]);
};

/* field */
PegInstructions.prototype.pegScope = function () {
  return new PegScope(this.message.tags[PegScope.Tag]);
};

/* field */
PegInstructions.prototype.pegPriceType = function () {
  return new PegPriceType(this.message.tags[PegPriceType.Tag]);
};

/* field */
PegInstructions.prototype.pegSecurityIdsource = function () {
  return new PegSecurityIDSource(this.message.tags[PegSecurityIDSource.Tag]);
};

/* field */
PegInstructions.prototype.pegSecurityId = function () {
  return new PegSecurityID(this.message.tags[PegSecurityID.Tag]);
};

/* field */
PegInstructions.prototype.pegSymbol = function () {
  return new PegSymbol(this.message.tags[PegSymbol.Tag]);
};

/* field */
PegInstructions.prototype.pegSecurityDesc = function () {
  return new PegSecurityDesc(this.message.tags[PegSecurityDesc.Tag]);
};



PegInstructions.Tag = '211';

module.exports = PegInstructions;