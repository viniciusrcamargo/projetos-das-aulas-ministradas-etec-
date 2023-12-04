const msgAlerta = document.querySelector(".msgAlerta");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confimaSenha");


function registrar(){
    if(senha.value !== confirmaSenha.value){
          console.log('As senhas não conicidem!');
          msgAlerta.innerHTML = '<h3 class="alerta">As senhas não conicidem!</h3>';
          msgAlerta.removeAttribute('hidden')
          setInterval(() => {
            msgAlerta.setAttribute('hidden', true);
            limpar(); 
          },4000)  
          return       
      } 
      let dados = {
          email: email.value,
          senha: senha.value,
          confirmaSenha: confirmaSenha.value
      }
      localStorage.setItem('dados', JSON.stringify(dados));
      limpar()
      alert('Cadastro realizado com sucesso!');
      setInterval(() => {        
        window.location.href = 'index.html';
    },2000)
    
 }

 function limpar(){
    senha.value = '';
    confirmaSenha.value = '';
    senha.focus();
 }
