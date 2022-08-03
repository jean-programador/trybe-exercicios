let numbers = [2, 4, 6, 8, 15, 12, 14, 16, 19, 7];
let impar = 0;

for (let numero of numbers){
     if (numero % 2 != 0)
     {
        impar +=1;
     }   
}

if (impar === 0)
{
    console.log("Nenhum valor ímpar encontrado");
} else 
{
console.log("Neste array foram encontrados",impar,"números ímpares");
}