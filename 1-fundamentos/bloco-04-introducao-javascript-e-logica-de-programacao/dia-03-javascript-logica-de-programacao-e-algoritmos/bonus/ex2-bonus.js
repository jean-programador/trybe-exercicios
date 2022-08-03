let n = 5;
let ast = [];

for (index = 1; index <= n; index += 1) {
    ast.push('*')
    let string = ast.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}