function printNumberPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        for (let k = i; k <= 2 * i - 1; k++) {
            row += k;
        }
        for (let l = 2 * i - 2; l >= i; l--) {
            row += l;
        }
        console.log(row);
    }
}

const n = 5;
printNumberPattern(n);