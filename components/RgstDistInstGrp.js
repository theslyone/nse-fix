var NoDistribInsts = require('../fields/NoDistribInsts');
var DistribPaymentMethod = require('../fields/DistribPaymentMethod');
var DistribPercentage = require('../fields/DistribPercentage');
var CashDistribCurr = require('../fields/CashDistribCurr');
var CashDistribAgentName = require('../fields/CashDistribAgentName');
var CashDistribAgentCode = require('../fields/CashDistribAgentCode');
var CashDistribAgentAcctNumber = require('../fields/CashDistribAgentAcctNumber');
var CashDistribPayRef = require('../fields/CashDistribPayRef');
var CashDistribAgentAcctName = require('../fields/CashDistribAgentAcctName');

function RgstDistInstGrp (rgstDistInstGrp) {
  this.message = rgstDistInstGrp;
}

/* group */

/* field */
RgstDistInstGrp.prototype.distribPaymentMethod = function () {
  return new DistribPaymentMethod(this.message.tags[DistribPaymentMethod.Tag]);
};

/* field */
RgstDistInstGrp.prototype.distribPercentage = function () {
  return new DistribPercentage(this.message.tags[DistribPercentage.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribCurr = function () {
  return new CashDistribCurr(this.message.tags[CashDistribCurr.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribAgentName = function () {
  return new CashDistribAgentName(this.message.tags[CashDistribAgentName.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribAgentCode = function () {
  return new CashDistribAgentCode(this.message.tags[CashDistribAgentCode.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribAgentAcctNumber = function () {
  return new CashDistribAgentAcctNumber(this.message.tags[CashDistribAgentAcctNumber.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribPayRef = function () {
  return new CashDistribPayRef(this.message.tags[CashDistribPayRef.Tag]);
};

/* field */
RgstDistInstGrp.prototype.cashDistribAgentAcctName = function () {
  return new CashDistribAgentAcctName(this.message.tags[CashDistribAgentAcctName.Tag]);
};

/* end group */

RgstDistInstGrp.Tag = '510';

module.exports = RgstDistInstGrp;