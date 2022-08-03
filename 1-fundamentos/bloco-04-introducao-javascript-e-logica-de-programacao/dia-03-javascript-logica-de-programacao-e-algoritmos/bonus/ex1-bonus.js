let n = 5;
let ast = [];

for(index = 1; index <= n; index += 1) {
    ast.push('*')
} 

for(i = 1; i <= n; i += 1){
    let string = ast.toString();
    let result = string.replace(/,/g, '');
    console.log(result);
}