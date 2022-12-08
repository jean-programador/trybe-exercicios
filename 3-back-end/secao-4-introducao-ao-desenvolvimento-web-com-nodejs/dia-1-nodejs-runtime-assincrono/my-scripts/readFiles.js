const fs = require('fs');

function showSimpsonsById(){
  const simpsons = JSON.parse(fs.readFileSync('./simpsons.json'));
  simpsons.forEach(({id, name}) => {
    console.log(`${id} - ${name}`)
  });
}

showSimpsonsById()