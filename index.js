var test = require('prova');
var fragment = require('fragment');
var fs = require('fs');

test('display', function(assert) {
    assert.plan(1);
    var svg = fs.readFileSync("./test.svg", "utf8");    
    var frag = fragment(svg);
    document.body.insertBefore(frag, document.body.childNodes[0]);
    assert.ok(true);
});
