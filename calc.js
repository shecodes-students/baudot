var r = 150;

var alpha = -3.5 * Math.PI / 15;
var x = (r * Math.cos(alpha)).toFixed(2);
var y = (r * Math.sin(alpha)).toFixed(2);

var sx = 0;
var sy = -r;

module.exports.makeSegmentPath = function() {
    var result = "";

    result += 'M' + sx + ',' + sy + ' A' + r + ',' + r + ' 0 0,1 ' + x + ',' + y + ' ';  

    //First inside point
    var innerRadius = r - 15;
    var firstInnerX = (innerRadius * Math.cos(alpha)).toFixed(2);
    var firstInnerY = (innerRadius * Math.sin(alpha)).toFixed(2);

    result += 'L' + firstInnerX + ',' + firstInnerY + ' ';


    //Second inside point
    result += 'A' + innerRadius + ',' + innerRadius + ' 0 0,0 0' + (-innerRadius) + ' z';

    return result;
};

module.exports.getSegmentRotation = function(segmentIndex) { 
    return 'rotate (' + (segmentIndex * 360 / 7.5).toFixed(2) + ' 0 0)';
};



