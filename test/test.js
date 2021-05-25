console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      drawText($text)
    };

    let varCallbacks = [
      function($text) {
        if ($text.value === 'hello world') {
          return {failure: 'Did you change `hello world` to JavaScript?'};
        }
        return true;
      }
    ];

    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure || 'Did you enter the word JavaScript in `\'\'` inside `drawText()`?';
    assert.isOk(isMatch, failureMessage);
  });
});