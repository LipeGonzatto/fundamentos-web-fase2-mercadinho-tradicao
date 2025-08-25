(function saudacaoDinamica(){
  const p = document.getElementById('saudacao');
  const agora = new Date();
  const hora = agora.getHours();
  let msg = 'Bem-vindo ao Mercadinho Tradição!';
  if(hora < 12) msg = 'Bom dia! Confira nossas ofertas fresquinhas.';
  else if(hora < 18) msg = 'Boa tarde! Aproveite as promoções do dia.';
  else msg = 'Boa noite! Faça seu pedido e agende a entrega.';
  p.textContent = msg;
})();

(function preparaAgendamento(){
  const inputData = document.getElementById('data');
  const inputHora = document.getElementById('hora');
  const hoje = new Date();
  const y = hoje.getFullYear();
  const m = String(hoje.getMonth()+1).padStart(2,'0');
  const d = String(hoje.getDate()).padStart(2,'0');
  inputData.min = `${y}-${m}-${d}`;
  inputHora.min = '08:00';
  inputHora.max = '20:00';
})();

(function alternaEntrega(){
  const entrega = document.getElementById('entrega');
  const retirada = document.getElementById('retirada');
  const bloco = document.getElementById('blocoEnderecoEntrega');
  entrega.addEventListener('change', ()=>{
    if(entrega.checked){
      bloco.classList.remove('d-none');
      document.getElementById('enderecoEntrega').required = true;
    }
  });
  retirada.addEventListener('change', ()=>{
    if(retirada.checked){
      bloco.classList.add('d-none');
      document.getElementById('enderecoEntrega').required = false;
    }
  });
})();

(function mascaras(){
  const cpf = document.getElementById('cpf');
  cpf.addEventListener('input', e=>{
    let v = e.target.value.replace(/\D/g,'');
    v = v.slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    e.target.value = v;
  });
  const tel = document.getElementById('telefone');
  tel.addEventListener('input', e=>{
    let v = e.target.value.replace(/\D/g,'').slice(0,11);
    if(v.length >= 11){
      e.target.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7,11)}`;
    } else if(v.length >= 6){
      e.target.value = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
    } else if(v.length >= 3){
      e.target.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
    } else {
      e.target.value = v;
    }
  });
})();

(function valida(){
  const form = document.getElementById('formCadastro');
  const status = document.getElementById('statusForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      status.textContent = 'Há campos com erro. Verifique os destaques em vermelho.';
      form.classList.add('was-validated');
      return;
    }
    const dados = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem('cadastroMercadinho', JSON.stringify(dados));
    status.textContent = 'Cadastro enviado com sucesso. Você receberá confirmação por e-mail.';
    form.reset();
    form.classList.remove('was-validated');
    document.getElementById('blocoEnderecoEntrega').classList.add('d-none');
  });
})();
