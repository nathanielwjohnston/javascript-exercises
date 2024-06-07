const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        index = array.indexOf(value);
        array.splice(index, 1);
    }


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
