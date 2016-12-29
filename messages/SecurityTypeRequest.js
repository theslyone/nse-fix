var SecurityReqID = require('../fields/SecurityReqID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Product = require('../fields/Product');
var SecurityType = require('../fields/SecurityType');
var SecuritySubType = require('../fields/SecuritySubType');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function SecurityTypeRequest (securityTypeRequest) {
  this.message = securityTypeRequest;
}

SecurityTypeRequest.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityTypeRequest.Tags.SecurityReqID]);
};

SecurityTypeRequest.prototype.text = function () {
  return new Text(this.message.tags[SecurityTypeRequest.Tags.Text]);
};

SecurityTypeRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityTypeRequest.Tags.EncodedTextLen]);
};

SecurityTypeRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityTypeRequest.Tags.EncodedText]);
};

SecurityTypeRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityTypeRequest.Tags.TradingSessionID]);
};

SecurityTypeRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityTypeRequest.Tags.TradingSessionSubID]);
};

SecurityTypeRequest.prototype.product = function () {
  return new Product(this.message.tags[SecurityTypeRequest.Tags.Product]);
};

SecurityTypeRequest.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SecurityTypeRequest.Tags.SecurityType]);
};

SecurityTypeRequest.prototype.securitySubType = function () {
  return new SecuritySubType(this.message.tags[SecurityTypeRequest.Tags.SecuritySubType]);
};

SecurityTypeRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityTypeRequest.Tags.MarketID]);
};

SecurityTypeRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityTypeRequest.Tags.MarketSegmentID]);
};

SecurityTypeRequest.Tags = {
  SecurityReqID: '320',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Product: '460',
  SecurityType: '167',
  SecuritySubType: '762',
  MarketID: '1301',
  MarketSegmentID: '1300',
};

SecurityTypeRequest.msgType = 'v';

module.exports = SecurityTypeRequest;