var cx = 300;
var cy = 200;
var r = 140;

var alpha = -3.5 * Math.PI / 15;
var x = cx + r * Math.cos(alpha);
var y = cy + r * Math.sin(alpha);

var sx = cx;
var sy = cy - r;


console.log('M' + sx + ', ' + sy + ' a' + r + ', ' + r + ' 0 0,1 ' + x + ', ' + y );

