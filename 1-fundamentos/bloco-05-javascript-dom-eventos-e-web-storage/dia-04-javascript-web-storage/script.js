//Usuário deve poder altera:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
window.onload = () => {
  const main = document.getElementById('main');

  //Cria função para mudar background Color da página
  const changeBackgroundColor = () => {
    const button = document.getElementById('btn-backG');
    button.addEventListener('click', () => {
      const input = document.getElementById('backgroundColor').value;
      if (main.style.backgroundColor === input.toLowerCase()) {
        main.style.backgroundColor = 'white';
      } else {
        main.style.backgroundColor = input;
        sessionStorage.setItem('backgroundColor', input);
      }
    });
  };

  // Cria função para mudar cor do texto
  const changeTextColor = () => {
    const button = document.getElementById('btn-color');
    button.addEventListener('click', () => {
      const input = document.getElementById('color').value;
      if (main.style.color === input.toLowerCase()) {
        main.style.color = 'black';
      } else {
        main.style.color = input;
        sessionStorage.setItem('color', input);
      }
    });
  };

  //Cria função para mudar tamanho da fonte
  const changeFontSize = () => {
    const button = document.getElementById('btn-fontSize');
    button.addEventListener('click', () => {
      const input = document.getElementById('font-size').value;
      if (main.style.fontSize === `${input}px`) {
        main.style.fontSize = '20px';
      } else {
        main.style.fontSize = `${input}px`;
        sessionStorage.setItem('font-size', `${input}px`);
      }
    });
  };

  //Cria uma função para mudar o espaçamento entre linhas
  const changeLineSpacing = () => {
    const button = document.getElementById('btn-lineSpacing');
    button.addEventListener('click', () => {
      const input = document.getElementById('line-spacing').value;
      if (main.style.lineHeight === `${input}px`) {
        main.style.lineHeight = '20px';
      } else {
        main.style.lineHeight = `${input}px`;
        sessionStorage.setItem('line-spacing', `${input}px`);
      }
    });
  };

  //Cria uma função para alterar a font-family
  const changeFontFamily = () => {
    const button = document.getElementById('btn-fontFamily');
    button.addEventListener('click', () => {
      const input = document.getElementById('font-family').value;
      if (main.style.fontFamily === input.toLowerCase()) {
        main.style.fontFamily = 'arial';
      } else {
        main.style.fontFamily = input;
        sessionStorage.setItem('font-family', input);
      }
    });
  };

  const verifications = () => {
    if (sessionStorage.getItem('backgroundColor') !== null) {
      main.style.backgroundColor = sessionStorage.getItem('backgroundColor');
    }
    if (sessionStorage.getItem('color') !== null) {
      main.style.color = sessionStorage.getItem('color');
    }
    if (sessionStorage.getItem('font-size') !== null) {
      main.style.fontSize = sessionStorage.getItem('font-size');
    }
    if (sessionStorage.getItem('line-spacing') !== null) {
      main.style.lineHeight = sessionStorage.getItem('line-spacing');
    }
    if (sessionStorage.getItem('font-family') !== null) {
      main.style.fontFamily = sessionStorage.getItem('font-family');
    }
  };
  changeBackgroundColor();
  changeFontFamily();
  changeFontSize();
  changeLineSpacing();
  changeTextColor();
  verifications();
};
