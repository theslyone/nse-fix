var invert = require('invert-obj');

function LegPool (legPool) {
  this.message = legPool;
}

LegPool.prototype.value = function () {
  return this.message;
};

LegPool.Tag = '740';

LegPool.Type = 'STRING';

module.exports = LegPool;