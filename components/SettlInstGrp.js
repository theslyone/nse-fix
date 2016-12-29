var NoSettlInst = require('../fields/NoSettlInst');
var Parties = require('../components/Parties');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var SettlInstID = require('../fields/SettlInstID');
var SettlInstTransType = require('../fields/SettlInstTransType');
var SettlInstRefID = require('../fields/SettlInstRefID');
var Side = require('../fields/Side');
var Product = require('../fields/Product');
var SecurityType = require('../fields/SecurityType');
var CFICode = require('../fields/CFICode');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireTime = require('../fields/ExpireTime');
var LastUpdateTime = require('../fields/LastUpdateTime');
var PaymentMethod = require('../fields/PaymentMethod');
var PaymentRef = require('../fields/PaymentRef');
var CardHolderName = require('../fields/CardHolderName');
var CardNumber = require('../fields/CardNumber');
var CardStartDate = require('../fields/CardStartDate');
var CardExpDate = require('../fields/CardExpDate');
var CardIssNum = require('../fields/CardIssNum');
var PaymentDate = require('../fields/PaymentDate');
var PaymentRemitterID = require('../fields/PaymentRemitterID');
var SettlCurrency = require('../fields/SettlCurrency');

function SettlInstGrp (settlInstGrp) {
  this.message = settlInstGrp;
}

/* group */

/* component */
SettlInstGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
SettlInstGrp.prototype.settlInstructionsData = function () {
  return this.message.groups[SettlInstructionsData.Tag]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

/* field */
SettlInstGrp.prototype.settlInstId = function () {
  return new SettlInstID(this.message.tags[SettlInstID.Tag]);
};

/* field */
SettlInstGrp.prototype.settlInstTransType = function () {
  return new SettlInstTransType(this.message.tags[SettlInstTransType.Tag]);
};

/* field */
SettlInstGrp.prototype.settlInstRefId = function () {
  return new SettlInstRefID(this.message.tags[SettlInstRefID.Tag]);
};

/* field */
SettlInstGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
SettlInstGrp.prototype.product = function () {
  return new Product(this.message.tags[Product.Tag]);
};

/* field */
SettlInstGrp.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SecurityType.Tag]);
};

/* field */
SettlInstGrp.prototype.cficode = function () {
  return new CFICode(this.message.tags[CFICode.Tag]);
};

/* field */
SettlInstGrp.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[EffectiveTime.Tag]);
};

/* field */
SettlInstGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
SettlInstGrp.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[LastUpdateTime.Tag]);
};

/* field */
SettlInstGrp.prototype.paymentMethod = function () {
  return new PaymentMethod(this.message.tags[PaymentMethod.Tag]);
};

/* field */
SettlInstGrp.prototype.paymentRef = function () {
  return new PaymentRef(this.message.tags[PaymentRef.Tag]);
};

/* field */
SettlInstGrp.prototype.cardHolderName = function () {
  return new CardHolderName(this.message.tags[CardHolderName.Tag]);
};

/* field */
SettlInstGrp.prototype.cardNumber = function () {
  return new CardNumber(this.message.tags[CardNumber.Tag]);
};

/* field */
SettlInstGrp.prototype.cardStartDate = function () {
  return new CardStartDate(this.message.tags[CardStartDate.Tag]);
};

/* field */
SettlInstGrp.prototype.cardExpDate = function () {
  return new CardExpDate(this.message.tags[CardExpDate.Tag]);
};

/* field */
SettlInstGrp.prototype.cardIssNum = function () {
  return new CardIssNum(this.message.tags[CardIssNum.Tag]);
};

/* field */
SettlInstGrp.prototype.paymentDate = function () {
  return new PaymentDate(this.message.tags[PaymentDate.Tag]);
};

/* field */
SettlInstGrp.prototype.paymentRemitterId = function () {
  return new PaymentRemitterID(this.message.tags[PaymentRemitterID.Tag]);
};

/* field */
SettlInstGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* end group */

SettlInstGrp.Tag = '778';

module.exports = SettlInstGrp;