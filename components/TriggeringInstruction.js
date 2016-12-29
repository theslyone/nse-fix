var TriggerType = require('../fields/TriggerType');
var TriggerAction = require('../fields/TriggerAction');
var TriggerPrice = require('../fields/TriggerPrice');
var TriggerSymbol = require('../fields/TriggerSymbol');
var TriggerSecurityID = require('../fields/TriggerSecurityID');
var TriggerSecurityIDSource = require('../fields/TriggerSecurityIDSource');
var TriggerSecurityDesc = require('../fields/TriggerSecurityDesc');
var TriggerPriceType = require('../fields/TriggerPriceType');
var TriggerPriceTypeScope = require('../fields/TriggerPriceTypeScope');
var TriggerPriceDirection = require('../fields/TriggerPriceDirection');
var TriggerNewPrice = require('../fields/TriggerNewPrice');
var TriggerOrderType = require('../fields/TriggerOrderType');
var TriggerNewQty = require('../fields/TriggerNewQty');
var TriggerTradingSessionID = require('../fields/TriggerTradingSessionID');
var TriggerTradingSessionSubID = require('../fields/TriggerTradingSessionSubID');

function TriggeringInstruction (triggeringInstruction) {
  this.message = triggeringInstruction;
}
/* field */
TriggeringInstruction.prototype.triggerType = function () {
  return new TriggerType(this.message.tags[TriggerType.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerAction = function () {
  return new TriggerAction(this.message.tags[TriggerAction.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerPrice = function () {
  return new TriggerPrice(this.message.tags[TriggerPrice.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerSymbol = function () {
  return new TriggerSymbol(this.message.tags[TriggerSymbol.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerSecurityId = function () {
  return new TriggerSecurityID(this.message.tags[TriggerSecurityID.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerSecurityIdsource = function () {
  return new TriggerSecurityIDSource(this.message.tags[TriggerSecurityIDSource.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerSecurityDesc = function () {
  return new TriggerSecurityDesc(this.message.tags[TriggerSecurityDesc.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerPriceType = function () {
  return new TriggerPriceType(this.message.tags[TriggerPriceType.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerPriceTypeScope = function () {
  return new TriggerPriceTypeScope(this.message.tags[TriggerPriceTypeScope.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerPriceDirection = function () {
  return new TriggerPriceDirection(this.message.tags[TriggerPriceDirection.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerNewPrice = function () {
  return new TriggerNewPrice(this.message.tags[TriggerNewPrice.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerOrderType = function () {
  return new TriggerOrderType(this.message.tags[TriggerOrderType.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerNewQty = function () {
  return new TriggerNewQty(this.message.tags[TriggerNewQty.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerTradingSessionId = function () {
  return new TriggerTradingSessionID(this.message.tags[TriggerTradingSessionID.Tag]);
};

/* field */
TriggeringInstruction.prototype.triggerTradingSessionSubId = function () {
  return new TriggerTradingSessionSubID(this.message.tags[TriggerTradingSessionSubID.Tag]);
};



TriggeringInstruction.Tag = '1100';

module.exports = TriggeringInstruction;