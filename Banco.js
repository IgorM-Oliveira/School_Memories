class Banco{
	constructor()
	{
		if(localStorage.getItem('clientes'))
		{
			this.cliente = JSON.parse(localStorage.getItem('clientes'));
		}		
		else
		{
			this.cliente = [];
		} 
	}
	inserir(Banco)
	{
		this.cliente.push(Banco);
		localStorage.setItem("clientes",JSON.stringify(this.cliente));
	}
	listar()
	{
		return this.cliente;
	}
	buscar(buscar)
	{
		var i;
		for(i=0;i<this.cliente.length;i++)
		{
			if(this.cliente[i].senha_cad == buscar)
			{
				return this.cliente[i];
			}
		}
		return false;
	}
}
