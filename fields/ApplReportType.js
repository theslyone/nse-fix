var invert = require('invert-obj');

function ApplReportType (applReportType) {
  this.message = applReportType;
}

ApplReportType.prototype.value = function () {
  return this.message;
};


ApplReportType.Keys = {
  'RESET_APPLSEQNUM_TO_NEW_VALUE_SPECIFIED_IN_APPLNEWSEQNUM': '0',
  'REPORTS_THAT_THE_LAST_MESSAGE_HAS_BEEN_SENT_FOR_THE_APPLIDS_REFER_TO_REFAPPLLASTSEQNUM': '1',
  'HEARTBEAT_MESSAGE_INDICATING_THAT_APPLICATION_IDENTIFIED_BY_REFAPPLID': '2',
};

ApplReportType.Tag = '1426';

ApplReportType.Type = 'INT';

ApplReportType.Values = invert(ApplReportType.Keys);

module.exports = ApplReportType;