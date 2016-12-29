var Parties = require('../components/Parties');
var PositionQty = require('../components/PositionQty');
var InstrmtGrp = require('../components/InstrmtGrp');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosReqType = require('../fields/PosReqType');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlPrice = require('../fields/SettlPrice');
var PriorSettlPrice = require('../fields/PriorSettlPrice');
var PosMaintRptRefID = require('../fields/PosMaintRptRefID');

function AdjustedPositionReport (adjustedPositionReport) {
  this.message = adjustedPositionReport;
}

AdjustedPositionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AdjustedPositionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[AdjustedPositionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AdjustedPositionReport.prototype.positionQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AdjustedPositionReport.Tags.PositionQty] === undefined) return null;
  return this.message.groups[AdjustedPositionReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

AdjustedPositionReport.prototype.instrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AdjustedPositionReport.Tags.InstrmtGrp] === undefined) return null;
  return this.message.groups[AdjustedPositionReport.Tags.InstrmtGrp]
    .map(function (instrmtGrp) {
      return new InstrmtGrp(instrmtGrp);
  });
};

AdjustedPositionReport.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[AdjustedPositionReport.Tags.PosMaintRptID]);
};

AdjustedPositionReport.prototype.posReqType = function () {
  return new PosReqType(this.message.tags[AdjustedPositionReport.Tags.PosReqType]);
};

AdjustedPositionReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AdjustedPositionReport.Tags.ClearingBusinessDate]);
};

AdjustedPositionReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[AdjustedPositionReport.Tags.SettlSessID]);
};

AdjustedPositionReport.prototype.settlPrice = function () {
  return new SettlPrice(this.message.tags[AdjustedPositionReport.Tags.SettlPrice]);
};

AdjustedPositionReport.prototype.priorSettlPrice = function () {
  return new PriorSettlPrice(this.message.tags[AdjustedPositionReport.Tags.PriorSettlPrice]);
};

AdjustedPositionReport.prototype.posMaintRptRefId = function () {
  return new PosMaintRptRefID(this.message.tags[AdjustedPositionReport.Tags.PosMaintRptRefID]);
};

AdjustedPositionReport.Tags = {
  Parties: '453',
  PositionQty: '702',
  InstrmtGrp: '146',
  PosMaintRptID: '721',
  PosReqType: '724',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlPrice: '730',
  PriorSettlPrice: '734',
  PosMaintRptRefID: '714',
};

AdjustedPositionReport.msgType = 'BL';

module.exports = AdjustedPositionReport;