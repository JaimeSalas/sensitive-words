"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('replaces blacklisted words with asterisks', function () {
  return expect((0, _["default"])('The name of the NX will be Nintendo Switch', ['switch'])).toBe('The name of the NX will be Nintendo ***');
});
test('replaces multiple instances of blacklisted words', function () {
  return expect((0, _["default"])('The name of the NX will be Nintendo Switch. The Switch will be awesome', ['switch'])).toBe('The name of the NX will be Nintendo ***. The *** will be awesome');
});