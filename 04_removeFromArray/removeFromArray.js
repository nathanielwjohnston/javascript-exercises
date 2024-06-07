const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        while (true) {
            index = array.indexOf(value);
            if (index === -1) {
                break;
            }
            array.splice(index, 1);
        }

    }


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
