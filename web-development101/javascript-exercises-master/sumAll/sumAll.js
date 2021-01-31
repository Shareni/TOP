const sumAll = function(x, y) {
    let summedUp = 0;
    let start;
    let end;
    if (typeof (x) === 'number' && typeof (y) === 'number' && x >= 0 && y >= 0) {
        if (x < y) {
            start = x;
            end = y;
        } else {
            start = y;
            end = x;
        }
        for (start; start < end + 1; start++) {
            summedUp = summedUp + start;
        }
        return summedUp;
    } else {
        return 'ERROR';
    }

}

module.exports = sumAll
