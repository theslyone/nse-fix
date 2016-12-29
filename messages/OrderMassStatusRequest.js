var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var MassStatusReqID = require('../fields/MassStatusReqID');
var MassStatusReqType = require('../fields/MassStatusReqType');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');

function OrderMassStatusRequest (orderMassStatusRequest) {
  this.message = orderMassStatusRequest;
}

OrderMassStatusRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassStatusRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[OrderMassStatusRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

OrderMassStatusRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassStatusRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[OrderMassStatusRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

OrderMassStatusRequest.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[OrderMassStatusRequest.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[OrderMassStatusRequest.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

OrderMassStatusRequest.prototype.massStatusReqId = function () {
  return new MassStatusReqID(this.message.tags[OrderMassStatusRequest.Tags.MassStatusReqID]);
};

OrderMassStatusRequest.prototype.massStatusReqType = function () {
  return new MassStatusReqType(this.message.tags[OrderMassStatusRequest.Tags.MassStatusReqType]);
};

OrderMassStatusRequest.prototype.account = function () {
  return new Account(this.message.tags[OrderMassStatusRequest.Tags.Account]);
};

OrderMassStatusRequest.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[OrderMassStatusRequest.Tags.AcctIDSource]);
};

OrderMassStatusRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[OrderMassStatusRequest.Tags.TradingSessionID]);
};

OrderMassStatusRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[OrderMassStatusRequest.Tags.TradingSessionSubID]);
};

OrderMassStatusRequest.prototype.side = function () {
  return new Side(this.message.tags[OrderMassStatusRequest.Tags.Side]);
};

OrderMassStatusRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  UnderlyingInstrument: '311',
  MassStatusReqID: '584',
  MassStatusReqType: '585',
  Account: '1',
  AcctIDSource: '660',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
};

OrderMassStatusRequest.msgType = 'AF';

module.exports = OrderMassStatusRequest;