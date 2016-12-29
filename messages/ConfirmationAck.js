var ConfirmID = require('../fields/ConfirmID');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var AffirmStatus = require('../fields/AffirmStatus');
var ConfirmRejReason = require('../fields/ConfirmRejReason');
var MatchStatus = require('../fields/MatchStatus');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function ConfirmationAck (confirmationAck) {
  this.message = confirmationAck;
}

ConfirmationAck.prototype.confirmId = function () {
  return new ConfirmID(this.message.tags[ConfirmationAck.Tags.ConfirmID]);
};

ConfirmationAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[ConfirmationAck.Tags.TradeDate]);
};

ConfirmationAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[ConfirmationAck.Tags.TransactTime]);
};

ConfirmationAck.prototype.affirmStatus = function () {
  return new AffirmStatus(this.message.tags[ConfirmationAck.Tags.AffirmStatus]);
};

ConfirmationAck.prototype.confirmRejReason = function () {
  return new ConfirmRejReason(this.message.tags[ConfirmationAck.Tags.ConfirmRejReason]);
};

ConfirmationAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[ConfirmationAck.Tags.MatchStatus]);
};

ConfirmationAck.prototype.text = function () {
  return new Text(this.message.tags[ConfirmationAck.Tags.Text]);
};

ConfirmationAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[ConfirmationAck.Tags.EncodedTextLen]);
};

ConfirmationAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[ConfirmationAck.Tags.EncodedText]);
};

ConfirmationAck.Tags = {
  ConfirmID: '664',
  TradeDate: '75',
  TransactTime: '60',
  AffirmStatus: '940',
  ConfirmRejReason: '774',
  MatchStatus: '573',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

ConfirmationAck.msgType = 'AU';

module.exports = ConfirmationAck;