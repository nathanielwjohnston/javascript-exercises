const removeFromArray = function(array, valueToRemove) {
    index = array.indexOf(valueToRemove);
    array.splice(index, 1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
