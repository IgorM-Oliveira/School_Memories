function cad() {
	document.getElementById('Cad').className = "visivel"
	document.getElementById('logar').className = "invisivel"

  limpar();
}

function toledo() {
  document.getElementById('toledo').className = "visivel"
  document.getElementById('comec').className = "invisivel"
}

function palacio() {
  document.getElementById('palacio').className = "visivel"
  document.getElementById('comec').className = "invisivel"
}

function arena(argument) {
  document.getElementById('arena').className = "visivel"
  document.getElementById('comec').className = "invisivel"
}

function volt() {
  document.getElementById('Cad').className = "invisivel"
  document.getElementById('logar').className = "visivel"
  document.getElementById('toledo').className = "invisivel"
  document.getElementById('comec').className = "visivel"
  document.getElementById('arena').className = "invisivel"
  document.getElementById('palacio').className = "invisivel"

  limpar();
}

/*Todas esses funções acima servem para as mudançãs de pagina entre visivel e invisivel*/

/*Está função abaixo serve para fazer a busca no banco de dados que esta salvo e usuario*/

function login() {
  var senha = document.getElementById('senha').value;
  var nome = document.getElementById('nome').value;

  var bd = new Banco();
  var obj = bd.buscar(senha);

  if(obj)
  {
    alert("Login efetuado");
    
    var apagar = document.querySelector("#apagar");
    
    document.querySelector("#nome_usuario").innerHTML = nome;

    document.querySelector("#confirme").style.display = "none";
    // esconde a página atual
    document.querySelector(atual).style.display = 'none';
    // o hash (# que está no href) passa a ser a página desejada
    Desejo = "#home"; 
    
    atual = Desejo;
  }
  else
  {
    alert ("Cliente não cadastrado no sistema!");
  
    limpar();
  }
}

/*Está função abaixo serve para a pesquisa de lugares que você já cadastror no banco dos lugares*/

function pesq() {
  var lugar = document.getElementById('busq').value;

  var b = new Top();
  var l = b.buscar(lugar);
  
  if(l)
  {
    document.querySelector("#nome_loc_busq").innerHTML ="Local: "+ l.nome_loc;
    document.querySelector("#cidade_busq").innerHTML ="Cidade: "+ l.cidade;
    document.querySelector("#rua_busq").innerHTML ="Rua: "+ l.rua;
    document.querySelector("#bairro_busq").innerHTML ="Bairro: "+ l.bairro;
    document.querySelector("#num_busq").innerHTML ="Número: "+ l.num;
    document.querySelector("#comit_busq").innerHTML ="Comentario: "+ l.comit;
  }
  else
  {
    alert = ("O "+lugar+" não está cadastrado")
  }
}

/*Está daqui serve para quase a mesma coisa do salvar usuario mas para os lugares depois de reslizar o login*/
/*Obs: Está função esta dando erro na hora de fazer o reconhecimento do loguin pois fala que não esta cadastrado no banco do usuario logo após fazer ele.*/

function salv_local() {

  var senha = document.getElementById('senha').value;
  var login = document.getElementById('login').value;
  var senha_cad = document.getElementById('senha_cad').value;
  var login_cad = document.getElementById('login_cad').value;

  /*var bd = new Banco();
  var obj = bd.buscar(senha);*/

  if(senha == senha_cad &&  login == login_cad)
  {
    var nome_loc = document.getElementById('nome_loc').value;
    var cidade = document.getElementById('cidade').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var num = document.getElementById('num').value;
    var comit = document.getElementById('comit').value;

    alert("Local Salvo");

    var y = new Local(nome_loc, cidade, rua, bairro, num, comit);
    var b = new Top();

    b.inserir(y);

    var vet = b.listar();

    limpar();
  }
  else
  {
    alert("Faça o Login!");
  
    limpar();
  }
}

/*Está função realiza o salvamento das informações do usuario no banco de dados e o login realiza a a busca atraves dessas informações*/

function salv() {
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sob_nome').value;
  var tel = document.getElementById('tel').value;
  var email = document.getElementById('email').value;
  var login_cad = document.getElementById('login_cad').value;
  var senha_cad = document.getElementById('senha_cad').value;
  var senha_cad_conf = document.getElementById('senha_cad_conf').value;

  if (senha_cad == senha_cad_conf) {
    if (login_cad != "" && senha_cad != "") {
      var x = new Cliente(nome, sobrenome, tel, email, login_cad, senha_cad, senha_cad_conf);
      var bd = new Banco();
    
      bd.inserir(x);

      var vetor = bd.listar();

      document.getElementById('Cad').className = "invisivel";
      document.getElementById('logar').className = "visivel";

      alert("Salvo")
    }
    else{
      alert("Infome um login ou senha")
    }
  }
  else{
    alert("Confirme a senha!");
    document.getElementById('senha_cad').value = "";
    document.getElementById('senha_cad_conf').value = "";
  }
}

/*Todo este trecho serve para a troca de pagina entre os "a" no lado de cima do site*/

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
  
  limpar() 
}

/*Esta já fala por si só é para fazer a limpa das inputs*/

function limpar(){
  document.getElementById('login').value = "";
  document.getElementById('senha').value = "";
  document.getElementById('nome').value = "";
  document.getElementById('sob_nome').value = "";
  document.getElementById('tel').value = "";
  document.getElementById('email').value = "";
  document.getElementById('login_cad').value = "";
  document.getElementById('senha_cad').value = "";
  document.getElementById('senha_cad_conf').value = "";
  document.getElementById('nome_loc').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('rua').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('num').value = "";
  document.getElementById('comit').value = "";
}