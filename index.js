var test = require('prova');
var fragment = require('fragment');

test('display', function(assert) {
    assert.plan(1);

    var svg = require('svg-builder')
        .width(125)
        .height(125);

    var logo = svg
        .circle({
            r: 40,
            fill: 'none',
            'stroke-width': 1,
            stroke: '#CB3728',
            cx: 42,
            cy: 82
        }).circle({
            r: 40,
        fill: 'none',
        'stroke-width': 1,
        stroke: '#3B92BC',
        cx: 84,
        cy: 82
        }).text({
            x: 10,
        y: 20,
        'font-family': 'helvetica',
        'font-size': 15,
        stroke : '#fff',
        fill: '#fff'
        }, 'My logo');
    console.log(svg.render());
    frag = fragment(svg.render());
    document.body.insertBefore(frag, document.body.childNodes[0]);
    assert.ok(true);
});
