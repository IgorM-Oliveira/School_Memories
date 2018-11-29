class Banco{
	constructor(nome)
		{
		if(localStorage.getItem('Cliente'))
		{
			this.pessoa = JSON.parse(localStorage.getItem('Cliente'));
		}		
		else
		{
			this.pessoa = [];
		} 
	}
	inserir(tudo)
	{
		this.pessoa.push(tudo);
		localStorage.setItem("Cliente",JSON.stringify(this.pessoa));
	}
	buscar(senha)
	{
		var login = document.getElementById('login').value;
		for(var i=0;i<this.pessoa.length;i++)
		{
			if(this.pessoa[i].senha_cad == senha && this.pessoa[i].login_cad == login)
			{
				return true;
			}		
		}
		return false;
	}
}

/*Todo isso serve para a construção, inserção, listagem e busca das informaçoes do usuario*/