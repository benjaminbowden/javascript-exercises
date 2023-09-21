function removeNonAlphaCharacters(str) {
    return str.replace(/[^a-z]/gi, '');
}

const palindromes = function (str) {
    let cleanStr = removeNonAlphaCharacters(str);
    cleanStr = cleanStr.toLowerCase();

    return cleanStr.split("").reverse().join("") === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
