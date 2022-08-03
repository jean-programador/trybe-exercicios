let n = 5;
let ast = [];

for(index = 1; index <= n; index += 1) {
    ast.push(' ')
} 

for(i = n; i <= n && i >= 1; i -= 1){
    ast.splice(i, 1, '*');
    let string = ast.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}