var Parties = require('../components/Parties');
var SettlInstReqID = require('../fields/SettlInstReqID');
var TransactTime = require('../fields/TransactTime');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var Side = require('../fields/Side');
var Product = require('../fields/Product');
var SecurityType = require('../fields/SecurityType');
var CFICode = require('../fields/CFICode');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireTime = require('../fields/ExpireTime');
var LastUpdateTime = require('../fields/LastUpdateTime');
var StandInstDbType = require('../fields/StandInstDbType');
var StandInstDbName = require('../fields/StandInstDbName');
var StandInstDbID = require('../fields/StandInstDbID');
var SettlCurrency = require('../fields/SettlCurrency');

function SettlementInstructionRequest (settlementInstructionRequest) {
  this.message = settlementInstructionRequest;
}

SettlementInstructionRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SettlementInstructionRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[SettlementInstructionRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

SettlementInstructionRequest.prototype.settlInstReqId = function () {
  return new SettlInstReqID(this.message.tags[SettlementInstructionRequest.Tags.SettlInstReqID]);
};

SettlementInstructionRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SettlementInstructionRequest.Tags.TransactTime]);
};

SettlementInstructionRequest.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[SettlementInstructionRequest.Tags.AllocAccount]);
};

SettlementInstructionRequest.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[SettlementInstructionRequest.Tags.AllocAcctIDSource]);
};

SettlementInstructionRequest.prototype.side = function () {
  return new Side(this.message.tags[SettlementInstructionRequest.Tags.Side]);
};

SettlementInstructionRequest.prototype.product = function () {
  return new Product(this.message.tags[SettlementInstructionRequest.Tags.Product]);
};

SettlementInstructionRequest.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SettlementInstructionRequest.Tags.SecurityType]);
};

SettlementInstructionRequest.prototype.cficode = function () {
  return new CFICode(this.message.tags[SettlementInstructionRequest.Tags.CFICode]);
};

SettlementInstructionRequest.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[SettlementInstructionRequest.Tags.EffectiveTime]);
};

SettlementInstructionRequest.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[SettlementInstructionRequest.Tags.ExpireTime]);
};

SettlementInstructionRequest.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[SettlementInstructionRequest.Tags.LastUpdateTime]);
};

SettlementInstructionRequest.prototype.standInstDbType = function () {
  return new StandInstDbType(this.message.tags[SettlementInstructionRequest.Tags.StandInstDbType]);
};

SettlementInstructionRequest.prototype.standInstDbName = function () {
  return new StandInstDbName(this.message.tags[SettlementInstructionRequest.Tags.StandInstDbName]);
};

SettlementInstructionRequest.prototype.standInstDbId = function () {
  return new StandInstDbID(this.message.tags[SettlementInstructionRequest.Tags.StandInstDbID]);
};

SettlementInstructionRequest.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlementInstructionRequest.Tags.SettlCurrency]);
};

SettlementInstructionRequest.Tags = {
  Parties: '453',
  SettlInstReqID: '791',
  TransactTime: '60',
  AllocAccount: '79',
  AllocAcctIDSource: '661',
  Side: '54',
  Product: '460',
  SecurityType: '167',
  CFICode: '461',
  EffectiveTime: '168',
  ExpireTime: '126',
  LastUpdateTime: '779',
  StandInstDbType: '169',
  StandInstDbName: '170',
  StandInstDbID: '171',
  SettlCurrency: '120',
};

SettlementInstructionRequest.msgType = 'AV';

module.exports = SettlementInstructionRequest;