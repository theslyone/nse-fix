var DiscretionInst = require('../fields/DiscretionInst');
var DiscretionOffsetValue = require('../fields/DiscretionOffsetValue');
var DiscretionMoveType = require('../fields/DiscretionMoveType');
var DiscretionOffsetType = require('../fields/DiscretionOffsetType');
var DiscretionLimitType = require('../fields/DiscretionLimitType');
var DiscretionRoundDirection = require('../fields/DiscretionRoundDirection');
var DiscretionScope = require('../fields/DiscretionScope');

function DiscretionInstructions (discretionInstructions) {
  this.message = discretionInstructions;
}
/* field */
DiscretionInstructions.prototype.discretionInst = function () {
  return new DiscretionInst(this.message.tags[DiscretionInst.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionOffsetValue = function () {
  return new DiscretionOffsetValue(this.message.tags[DiscretionOffsetValue.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionMoveType = function () {
  return new DiscretionMoveType(this.message.tags[DiscretionMoveType.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionOffsetType = function () {
  return new DiscretionOffsetType(this.message.tags[DiscretionOffsetType.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionLimitType = function () {
  return new DiscretionLimitType(this.message.tags[DiscretionLimitType.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionRoundDirection = function () {
  return new DiscretionRoundDirection(this.message.tags[DiscretionRoundDirection.Tag]);
};

/* field */
DiscretionInstructions.prototype.discretionScope = function () {
  return new DiscretionScope(this.message.tags[DiscretionScope.Tag]);
};



DiscretionInstructions.Tag = '388';

module.exports = DiscretionInstructions;