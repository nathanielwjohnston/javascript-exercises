const getTheTitles = function(array) {
    return array.reduce((accumulator, item) => {
        accumulator.push(item.title);
        return accumulator
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
