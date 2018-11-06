function cad() {
	document.getElementById('Cad').className = "visivel"
	document.getElementById('logar').className = "invisivel"
}

function logar() {
	document.getElementById('Cad').className = "invisivel"
	document.getElementById('logar').className = "visivel"
}

function login() {
  var senha = document.getElementById('senha').value;
  var login = document.getElementById('login').value;

  var bd = new Banco();
  var obj = bd.buscar(senha, login);

  if(obj)
  {
    window.location.href="F:/Materias/POO/Site%202.0/Pagina_Principal.html"
  }
  else
  {
    texto.innerHTML = "Produto não cadastrado no sistema!"
  }
}

function salv() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sob_nome').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var login_cad = document.getElementById('login_cad').value;
    var senha_cad = document.getElementById('senha_cad').value;
    var senha_cad_conf = document.getElementById('senha_cad_conf').value;

  var x = new Cliente(nome, sobrenome, tel, email, login_cad, senha_cad, senha_cad_conf);
  var bd = new Banco();

  bd.inserir(x);

  var vetor = bd.listar();

  for(var i=0; i<vetor.length;i++)
  {
    texto +="<p>Nome Produto: "+vetor[i].nome+"</p>";
    texto +="<p>Código: "+ vetor[i].sobrenome+"</p>";
    texto +="<p>Quantidade: "+ vetor[i].tel+"</p>";
    texto +="<p>Data: "+ vetor[i].email+"</p>";
  }
}

// Selecionar todos os links do menu
var linksMenu =  document.querySelectorAll('a'); 
// Representa o hash (#) da página atual
var atual = '#home';
// Representa o hash (#) da página que deve ser aberta quando o usuário clica em um item do menu
var Desejo = '';  

// Para cada link do menu, utilizar a função "alterarPagina" para lidar com as trocas de páginas
linksMenu.forEach(function(link){ 
  console.log(link);
  link.addEventListener('click', alterarPagina);
});

function alterarPagina(evt){
  // cancela a movimentação da barra de "rolagem" da página
  evt.preventDefault();
  // esconde a página atual
  document.querySelector(atual).style.display = 'none';
  // o hash (# que está no href) passa a ser a página desejada
  Desejo = evt.target.hash; 
  // "mostra" a página desejada
  document.querySelector(Desejo).style.display = 'block';
  // faz com que a página atual seja a página desejada, já que ela foi aberta 
  atual = Desejo;  
}