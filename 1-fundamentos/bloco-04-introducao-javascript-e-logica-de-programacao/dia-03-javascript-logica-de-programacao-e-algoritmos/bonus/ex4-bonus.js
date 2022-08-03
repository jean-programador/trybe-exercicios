let n = 9;
let ast = [];

for (index = 1; index <= n; index += 1) {
    ast.push(' ')
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
        }
    }

    for (line = base; line < n && line >= 1; line += 1) {
        if (line <= right && line >= left) {
            ast[right - 1] = '*';
            ast[left - 1] = '*';
            right += 1;
            left -= 1;
            let string = ast.toString();
            let result = string.replace(/,/g, '');
            console.log(result);
        }
    }
}