const form = document.getElementById('form');
let formEValido = false;

function validaCampo(numeroEndereco){
    const valido = numeroEndereco.value;
    return valido.length; 
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const cep = document.getElementById('cep');
    const telefone = document.getElementById('telefone');
    const cepFloat = parseFloat(cep);
    const telefoneFloat = parseFloat(telefone);
    const successMesssage = `Mensagem enviada com sucesso!`;

    formEValido = validaCampo(cep);
    if (formEValido < telefone.value.length){
        const containersuccessMessage = document.querySelector('.success-message');
        containersuccessMessage.innerHTML = successMesssage;
        containersuccessMessage.style.display = 'block';
        document.querySelector('.message-error').style.display = 'none';
        cep.style.border = 'solid 1px';
        
        cep.value='';
        telefone.value='';

    }   else {
        cep.style.border = 'solid red 2px';
        document.querySelector('.message-error').style.display = 'block';
        const containersuccessMessage = document.querySelector('.success-message');
        containersuccessMessage.innerHTML = successMesssage;
        containersuccessMessage.style.display = 'none';
    }
})