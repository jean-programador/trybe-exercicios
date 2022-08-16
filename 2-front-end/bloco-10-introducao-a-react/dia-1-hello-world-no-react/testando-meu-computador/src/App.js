import React from 'react';

const Task = (value) => {
  const mapValue = value.map((valu) => <li>{valu}</li>)
  return (
   <ol>
    {mapValue}
   </ol>
  );
}

class App extends React.Component {
  render() {
  const comp = ['Assistir Aula Ao Vivo', 'Fazer Exercícios', 'Preencher Forms', 'Treinar Soft Skils', 'Atualizar Linkedin e GitHub']
  return ( Task(comp));
  }
}

export default App;
