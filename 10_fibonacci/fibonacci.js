const fibonacci = function(num) {
    a = 1;
    b = 1;
    for (i = 1; i < num; i++) {
        current = a + b;
        a = b;
        b = current
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
