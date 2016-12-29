var invert = require('invert-obj');

function SecurityResponseType (securityResponseType) {
  this.message = securityResponseType;
}

SecurityResponseType.prototype.value = function () {
  return this.message;
};


SecurityResponseType.Keys = {
  'ACCEPT_SECURITY_PROPOSAL_AS_IS': '1',
  'ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE': '2',
  'LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST': '3',
  'LIST_OF_SECURITIES_RETURNED_PER_REQUEST': '4',
  'REJECT_SECURITY_PROPOSAL': '5',
  'CANNOT_MATCH_SELECTION_CRITERIA': '6',
};

SecurityResponseType.Tag = '323';

SecurityResponseType.Type = 'INT';

SecurityResponseType.Values = invert(SecurityResponseType.Keys);

module.exports = SecurityResponseType;