const sumAll = function(start, end) {
    if (!Number.isInteger(start) || start < 0 || !Number.isInteger(end) || end < 0) {
        return "ERROR"
    }
    sum = null;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
