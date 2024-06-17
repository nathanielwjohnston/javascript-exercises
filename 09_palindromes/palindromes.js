const palindromes = function (string) {
    reverseString = string.split().reverse().join();
    if (reverseString === string) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
