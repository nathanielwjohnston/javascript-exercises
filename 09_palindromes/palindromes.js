const palindromes = function (string) {
    alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    alteredString = string
                        .toLowerCase()
                        .split("")
                        .filter(letter => alphanumerical.includes(letter))
                        .join("");
    reverseString = alteredString.split("").reverse().join("");
    if (reverseString === alteredString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
