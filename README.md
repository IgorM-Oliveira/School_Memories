<!DOCTYPE html>
<html>
	<head>
		<title>Madrid</title>
		<link rel="stylesheet" type="text/css" href="Css_Principal.css">
		<meta charset="utf-8">
	</head>
<body>

	<header class="clearfix">
		<nav>
		    <ul id="nav">
		    	<li><a href="#home">Home</a></li>
		    	<li><a href="#lugar">Lugares</a>
		    		<ul>
		        		<li><a href="#buscar">Buscar</a></li>
		    		</ul>         
		    	</li>
		    	<li><a href="#lista">Listar</a></li>
		    </ul>
		</nav>
	</header>
	<section id="home">
		<div class="visivel">
			<h1>Locais legais em Madrid</h1>
		</div>
	</section>
	<section id="buscar" class="invisivel">
		<div id="pesq" >
			<h1>Busca</h1>
			<p><input type="text" placeholder="Digite seu local" id="busq"></p>
		</div>
	</section>
	<section id="lista" class="invisivel">
		<h1>Madrid</h1>
			<div class="img">
				<img src="https://cdn.getyourguide.com/img/tour_img-371025-146.jpg" width="400" height="400">
				<div class="column">
					<p>Toledo</p>
					<button onclick="compra()">Comprar</button>
				</div>
			</div>
			<div class="img">
				<img src="https://3.bp.blogspot.com/-ANeg8hzVICU/Urm5Izux74I/AAAAAAAAQho/2smgzzsZCJU/s1600/palacio-real-Madrid.jpg" width="400" height="400">
				<div class="column">
					<p>Palacio Real</p>
					<button onclick="compra()">Comprar</button>
				</div>
			</div>
			<div class="img">
				<img src="https://cdn.getyourguide.com/img/tour_img-162184-145.jpg" width="400" height="400">
				<div class="column">
					<p>Arena de Touradas</p>
					<button onclick="compra()">Comprar</button>
				</div>
			</div>
	</section>
	<script type="text/javascript" src="Js_Principal.js"></script>
</body>
</html>
