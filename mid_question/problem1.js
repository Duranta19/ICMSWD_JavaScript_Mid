function removeChar(input) {

    const filteredString = input.replace(/[acz]/gi, '');

    return filteredString;
}

console.log(removeChar("abcdefgz"));