var invert = require('invert-obj');

function OwnerType (ownerType) {
  this.message = ownerType;
}

OwnerType.prototype.value = function () {
  return this.message;
};


OwnerType.Keys = {
  'INDIVIDUAL_INVESTOR': '1',
  'NETWORKING_SUB_ACCOUNT': '10',
  'NON_PROFIT_ORGANIZATION': '11',
  'CORPORATE_BODY': '12',
  'NOMINEE': '13',
  'PUBLIC_COMPANY': '2',
  'PRIVATE_COMPANY': '3',
  'INDIVIDUAL_TRUSTEE': '4',
  'COMPANY_TRUSTEE': '5',
  'PENSION_PLAN': '6',
  'CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT': '7',
  'TRUSTS': '8',
  'FIDUCIARIES': '9',
};

OwnerType.Tag = '522';

OwnerType.Type = 'INT';

OwnerType.Values = invert(OwnerType.Keys);

module.exports = OwnerType;