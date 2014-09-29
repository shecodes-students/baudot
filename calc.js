var cx = 300;
var cy = 200;
var r = 150;

var alpha = -3.5 * Math.PI / 15;
var x = (cx + r * Math.cos(alpha)).toFixed(2);
var y = (cy + r * Math.sin(alpha)).toFixed(2);

var sx = cx;
var sy = cy - r;

console.log('M' + sx + ',' + sy + ' A' + r + ',' + r + ' 0 0,1 ' + x + ',' + y );



//First inside point
var innerRadius = r - 15;
var firstInnerX = (cx + innerRadius * Math.cos(alpha)).toFixed(2);
var firstInnerY = (cy + innerRadius * Math.sin(alpha)).toFixed(2);

console.log('L' + firstInnerX + ',' + firstInnerY);


//Second inside point
console.log('A' + innerRadius + ',' + innerRadius + ' 0 0,0 ' + cx + ',' + (cy-innerRadius));
