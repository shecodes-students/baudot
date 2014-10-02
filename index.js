var test = require('prova');
var fragment = require('fragment');
var fs = require('fs');
var svgTemplate = require('./baudot.ejs');
var calc = require('./calc');

test('display', function(assert) {
    assert.plan(1);
    var svg = svgTemplate(calc);
    var frag = fragment(svg);
    document.body.insertBefore(frag, document.body.childNodes[0]);
    var hand = document.getElementById('hand');
    
    var angle = 0;
    var baudrate = 0.75; // bits per seconds
    var bitsPerRotation = 7.5;
    var startTime = new Date().getTime();
    function update() {
        var currentTime = new Date().getTime();
        var t = currentTime - startTime;
        angle = 360 * baudrate / bitsPerRotation * t / 1000;
        hand.setAttribute('transform', "rotate(" + angle + ")");
    }
    function segmentFromKeyCode(keyCode) {
        var segment = keyCode - 49;
        if (segment >= 0 && segment < 5) {
            return segment + 1; // because segment 0 is the start bit
        }
        return undefined;
    }
    document.onkeydown = createKeyHandler('white'); 
    document.onkeyup = createKeyHandler('none'); 
    
    function createKeyHandler(strokeColor) {    
        return function (e) {
            e = e || window.event;
            var segmentIndex = segmentFromKeyCode(e.keyCode);
            if (typeof segmentIndex === 'undefined') return;
            var segment = document.getElementById('segment_' + segmentIndex);
            segment.setAttribute("stroke", strokeColor);
        };
    }


    window.setInterval(update, 1000/60);
    assert.ok(true);
});
