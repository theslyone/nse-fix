var invert = require('invert-obj');

function MultiLegRptTypeReq (multiLegRptTypeReq) {
  this.message = multiLegRptTypeReq;
}

MultiLegRptTypeReq.prototype.value = function () {
  return this.message;
};


MultiLegRptTypeReq.Keys = {
  'REPORT_BY_MULITLEG_SECURITY_ONLY': '0',
  'REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY': '1',
  'REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY': '2',
};

MultiLegRptTypeReq.Tag = '563';

MultiLegRptTypeReq.Type = 'INT';

MultiLegRptTypeReq.Values = invert(MultiLegRptTypeReq.Keys);

module.exports = MultiLegRptTypeReq;