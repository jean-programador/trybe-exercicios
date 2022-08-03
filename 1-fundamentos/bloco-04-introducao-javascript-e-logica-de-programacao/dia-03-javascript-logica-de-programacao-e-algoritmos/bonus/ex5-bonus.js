let n = 7;
let ast = [];
let basePy = [];

for (index = 1; index <= n; index += 1) {
    ast.push(' ')
    basePy.push('*');
}

const base = (n + 1) / 2;
let right = base;
let left = base;

if (n % 2 === 0) {
    console.log("A base da pirâmode precisa ser um número ímpar!!");
} else {
    for (i = 1; i <= n; i += 1) {
        if (i === base) {
            ast[i - 1] = "*";
            right += 1;
            left -= 1;
            let string = ast.toString();
            let result = string.replace(/,/g, '');
            console.log(result);
            ast.splice(i - 1, 1, ' ');
        }
    }

    for (line = base; line < n - 1 && line >= 1; line += 1) {
        if (line <= right && line >= left) {
            ast[right - 1] = '*';
            ast[left - 1] = '*';
            let string = ast.toString();
            let result = string.replace(/,/g, '');
            console.log(result);
            ast.splice(right - 1, 1, ' ');
            ast.splice(left - 1, 1, ' ');
            right += 1;
            left -= 1;
        }
    }
    let string = basePy.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}