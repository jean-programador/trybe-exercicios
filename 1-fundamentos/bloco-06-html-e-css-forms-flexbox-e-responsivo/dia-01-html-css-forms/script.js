const btn = document.getElementById('submit');
const check = document.getElementById('checkbox2');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const validations = (event) => {
    if (inputName.value.length < 10 || inputName.value.length > 40) {
        event.preventDefault();
        alert('Dados Inválidos');
    } else if (inputEmail.value.length < 10 || inputEmail.value.lenght > 50) {
        event.preventDefault();
        alert('Dados Inválidos');
    } else if (!check.checked) {
        event.preventDefault();
        alert('È necessário aceitar o uso das imagens para enviar o formulário');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}
btn.addEventListener('click', validations)