var RoutingGrp = require('../components/RoutingGrp');
var InstrmtGrp = require('../components/InstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var LinesOfTextGrp = require('../components/LinesOfTextGrp');
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var OrigTime = require('../fields/OrigTime');
var Urgency = require('../fields/Urgency');
var Headline = require('../fields/Headline');
var EncodedHeadlineLen = require('../fields/EncodedHeadlineLen');
var EncodedHeadline = require('../fields/EncodedHeadline');
var URLLink = require('../fields/URLLink');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');

function News (news) {
  this.message = news;
}

News.prototype.routingGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.RoutingGrp] === undefined) return null;
  return this.message.groups[News.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

News.prototype.instrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.InstrmtGrp] === undefined) return null;
  return this.message.groups[News.Tags.InstrmtGrp]
    .map(function (instrmtGrp) {
      return new InstrmtGrp(instrmtGrp);
  });
};

News.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[News.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

News.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[News.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

News.prototype.linesOfTextGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.LinesOfTextGrp] === undefined) return null;
  return this.message.groups[News.Tags.LinesOfTextGrp]
    .map(function (linesOfTextGrp) {
      return new LinesOfTextGrp(linesOfTextGrp);
  });
};

News.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[News.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[News.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

News.prototype.origTime = function () {
  return new OrigTime(this.message.tags[News.Tags.OrigTime]);
};

News.prototype.urgency = function () {
  return new Urgency(this.message.tags[News.Tags.Urgency]);
};

News.prototype.headline = function () {
  return new Headline(this.message.tags[News.Tags.Headline]);
};

News.prototype.encodedHeadlineLen = function () {
  return new EncodedHeadlineLen(this.message.tags[News.Tags.EncodedHeadlineLen]);
};

News.prototype.encodedHeadline = function () {
  return new EncodedHeadline(this.message.tags[News.Tags.EncodedHeadline]);
};

News.prototype.urllink = function () {
  return new URLLink(this.message.tags[News.Tags.URLLink]);
};

News.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[News.Tags.RawDataLength]);
};

News.prototype.rawData = function () {
  return new RawData(this.message.tags[News.Tags.RawData]);
};

News.Tags = {
  RoutingGrp: '215',
  InstrmtGrp: '146',
  InstrmtLegGrp: '555',
  UndInstrmtGrp: '711',
  LinesOfTextGrp: '33',
  ApplicationSequenceControl: '1180',
  OrigTime: '42',
  Urgency: '61',
  Headline: '148',
  EncodedHeadlineLen: '358',
  EncodedHeadline: '359',
  URLLink: '149',
  RawDataLength: '95',
  RawData: '96',
};

News.msgType = 'B';

module.exports = News;