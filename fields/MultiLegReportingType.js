var invert = require('invert-obj');

function MultiLegReportingType (multiLegReportingType) {
  this.message = multiLegReportingType;
}

MultiLegReportingType.prototype.value = function () {
  return this.message;
};


MultiLegReportingType.Keys = {
  'SINGLE_SECURITY': '1',
  'INDIVIDUAL_LEG_OF_A_MULTILEG_SECURITY': '2',
  'MULTI_LEG_SECURITY': '3',
};

MultiLegReportingType.Tag = '442';

MultiLegReportingType.Type = 'CHAR';

MultiLegReportingType.Values = invert(MultiLegReportingType.Keys);

module.exports = MultiLegReportingType;