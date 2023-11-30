function removeChar(input) {
    const originalStringLen = input.length;
    const filteredString = input.replace(/[aeiouAEIOU]/gi, '');
    const filteredStringlen = filteredString.length;
    return originalStringLen - filteredStringlen;
}

console.log(removeChar("abcdefgz"));