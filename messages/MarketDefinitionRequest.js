var MarketReqID = require('../fields/MarketReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var ParentMktSegmID = require('../fields/ParentMktSegmID');

function MarketDefinitionRequest (marketDefinitionRequest) {
  this.message = marketDefinitionRequest;
}

MarketDefinitionRequest.prototype.marketReqId = function () {
  return new MarketReqID(this.message.tags[MarketDefinitionRequest.Tags.MarketReqID]);
};

MarketDefinitionRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[MarketDefinitionRequest.Tags.SubscriptionRequestType]);
};

MarketDefinitionRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDefinitionRequest.Tags.MarketID]);
};

MarketDefinitionRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDefinitionRequest.Tags.MarketSegmentID]);
};

MarketDefinitionRequest.prototype.parentMktSegmId = function () {
  return new ParentMktSegmID(this.message.tags[MarketDefinitionRequest.Tags.ParentMktSegmID]);
};

MarketDefinitionRequest.Tags = {
  MarketReqID: '1393',
  SubscriptionRequestType: '263',
  MarketID: '1301',
  MarketSegmentID: '1300',
  ParentMktSegmID: '1325',
};

MarketDefinitionRequest.msgType = 'BT';

module.exports = MarketDefinitionRequest;