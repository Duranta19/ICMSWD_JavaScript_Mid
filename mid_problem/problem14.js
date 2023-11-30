function pattern(n) {
    let row = '';
    for (let i = 0; i <= n; i++) {
         let row = '';

        for (let j = i; j < n ; j++) {
            row += ' ';
        }
        for (let k = 0; k <= i; k++) {
            row += '*'
            
        }

        console.log(row);
    }
}


const n = 5;

pattern(n);