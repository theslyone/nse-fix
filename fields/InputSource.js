var invert = require('invert-obj');

function InputSource (inputSource) {
  this.message = inputSource;
}

InputSource.prototype.value = function () {
  return this.message;
};

InputSource.Tag = '979';

InputSource.Type = 'STRING';

module.exports = InputSource;