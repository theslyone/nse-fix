var RoutingGrp = require('../components/RoutingGrp');
var InstrmtGrp = require('../components/InstrmtGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var LinesOfTextGrp = require('../components/LinesOfTextGrp');
var EmailThreadID = require('../fields/EmailThreadID');
var EmailType = require('../fields/EmailType');
var OrigTime = require('../fields/OrigTime');
var Subject = require('../fields/Subject');
var EncodedSubjectLen = require('../fields/EncodedSubjectLen');
var EncodedSubject = require('../fields/EncodedSubject');
var OrderID = require('../fields/OrderID');
var ClOrdID = require('../fields/ClOrdID');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');

function Email (email) {
  this.message = email;
}

Email.prototype.routingGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Email.Tags.RoutingGrp] === undefined) return null;
  return this.message.groups[Email.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

Email.prototype.instrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Email.Tags.InstrmtGrp] === undefined) return null;
  return this.message.groups[Email.Tags.InstrmtGrp]
    .map(function (instrmtGrp) {
      return new InstrmtGrp(instrmtGrp);
  });
};

Email.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Email.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[Email.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

Email.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Email.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[Email.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

Email.prototype.linesOfTextGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[Email.Tags.LinesOfTextGrp] === undefined) return null;
  return this.message.groups[Email.Tags.LinesOfTextGrp]
    .map(function (linesOfTextGrp) {
      return new LinesOfTextGrp(linesOfTextGrp);
  });
};

Email.prototype.emailThreadId = function () {
  return new EmailThreadID(this.message.tags[Email.Tags.EmailThreadID]);
};

Email.prototype.emailType = function () {
  return new EmailType(this.message.tags[Email.Tags.EmailType]);
};

Email.prototype.origTime = function () {
  return new OrigTime(this.message.tags[Email.Tags.OrigTime]);
};

Email.prototype.subject = function () {
  return new Subject(this.message.tags[Email.Tags.Subject]);
};

Email.prototype.encodedSubjectLen = function () {
  return new EncodedSubjectLen(this.message.tags[Email.Tags.EncodedSubjectLen]);
};

Email.prototype.encodedSubject = function () {
  return new EncodedSubject(this.message.tags[Email.Tags.EncodedSubject]);
};

Email.prototype.orderId = function () {
  return new OrderID(this.message.tags[Email.Tags.OrderID]);
};

Email.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[Email.Tags.ClOrdID]);
};

Email.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[Email.Tags.RawDataLength]);
};

Email.prototype.rawData = function () {
  return new RawData(this.message.tags[Email.Tags.RawData]);
};

Email.Tags = {
  RoutingGrp: '215',
  InstrmtGrp: '146',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  LinesOfTextGrp: '33',
  EmailThreadID: '164',
  EmailType: '94',
  OrigTime: '42',
  Subject: '147',
  EncodedSubjectLen: '356',
  EncodedSubject: '357',
  OrderID: '37',
  ClOrdID: '11',
  RawDataLength: '95',
  RawData: '96',
};

Email.msgType = 'C';

module.exports = Email;