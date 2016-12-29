var RFQReqGrp = require('../components/RFQReqGrp');
var Parties = require('../components/Parties');
var RFQReqID = require('../fields/RFQReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var PrivateQuote = require('../fields/PrivateQuote');

function RFQRequest (rfqrequest) {
  this.message = rfqrequest;
}

RFQRequest.prototype.rfqreqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RFQRequest.Tags.RFQReqGrp] === undefined) return null;
  return this.message.groups[RFQRequest.Tags.RFQReqGrp]
    .map(function (rfqreqGrp) {
      return new RFQReqGrp(rfqreqGrp);
  });
};

RFQRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[RFQRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[RFQRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

RFQRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[RFQRequest.Tags.RFQReqID]);
};

RFQRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[RFQRequest.Tags.SubscriptionRequestType]);
};

RFQRequest.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[RFQRequest.Tags.PrivateQuote]);
};

RFQRequest.Tags = {
  RFQReqGrp: '146',
  Parties: '453',
  RFQReqID: '644',
  SubscriptionRequestType: '263',
  PrivateQuote: '1171',
};

RFQRequest.msgType = 'AH';

module.exports = RFQRequest;