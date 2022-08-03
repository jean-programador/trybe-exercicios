const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
    return names.reduce((acc, name) => {
     const numberOFA = name.match(/a/gi);
     return acc += numberOFA.length;
    }, 0)
}

console.log(containsA());