const palindromes = function (string) {
    letters = "abcdefghijklmnopqrstuvwxyz";
    alteredString = string
                        .toLowerCase()
                        .split("")
                        .filter(letter => letters.includes(letter))
                        .join("");
    reverseString = alteredString.split("").reverse().join("");
    if (reverseString === alteredString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
