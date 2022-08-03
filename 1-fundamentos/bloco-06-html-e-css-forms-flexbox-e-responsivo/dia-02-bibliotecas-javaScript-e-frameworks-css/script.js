const datePicker = document.getElementById('datepicker').DatePickerX.init({format: 'dd/mm/yyyy'});


//Usando biblioteca Just-Validate para validações no formulário
const validation = new JustValidate('#form');
validation
.addField('#input-name', [
{
rule: 'minLength',
value: 10,
errorMessage: 'Dados Inválidos!'
},
{
rule: 'maxLength',
value: 40,
errorMessage: 'Dados Inválidos!'
},
])
.addField('#input-email', [
{
rule: 'minLength',
value: 10,
errorMessage: 'Dados Inválidos!',
},
{
rule: 'maxLength',
value: 50,
errorMessage: 'Dados Inválidos!',
},
{
rule: 'email',
errorMessage: 'Email Inválido!!',
},
])
.addField('#checkbox2', [
{
rule: 'required',
errorMessage: 'È necessário aceitar o uso das imagens para enviar o formulário',
}
])
.addField('#textarea-answer', [
{
rule: 'maxLength',
value: 500,
errorMessage: 'Tamanho máximo de 500 caracteres!!',
}
])
.onSuccess((event) => {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip', event);
    location.reload();
  });