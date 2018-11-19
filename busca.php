<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>c.teach</title>
        <meta name="description" content="Plataforma para compartilhar planos de aula.">
        
        <link rel="stylesheet"      href="vendor/bootstrap/css/bootstrap.css">
        <link rel="stylesheet"      href="css/cteach.css">

        <!-- Fonts -->
        <link rel="stylesheet"      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro">
        <!-- Icons -->
        <!-- <link rel="stylesheet"      href="vendor/fontawesome-free/css/all.min.css"> -->
		<link rel="stylesheet"      href="vendor/font-awesome/css/font-awesome.css">
        <!-- Favicon -->
        <link rel="shortcut icon"   href="favicon.ico">
        <link rel="icon"            href="favicon.ico">
    </head>
    <body>
        <!-- Barra de navegação -->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navbarCteach">
            <div class="container">
                <a class="navbar-brand" href="index.php">
                    <img src="img/logo.png" alt="Logo c.teach">
                </a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarOptions" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarOptions">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.php">Principal</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.php#quemSomos">Quem Somos</a></li>
                        <li class="nav-item active"><a class="nav-link" href="busca.php">Busca</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.php">Acesse</a></li>
                    </ul>
                </div>    
            </div>    
        </nav>
        <!-- Cabeçalho da tela principal -->
        <header class="busca">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>Busca por planos de aula</h1>
                    </div>
                </div>
            </div>
        </header>
        <section class="busca">
            <div class="container">
                <div class="row">
                    <!-- Filtros -->
                    <div class="col-md-3">
                        <div class="row mb-3">
                            <h2>Filtros</h2>
                        </div>    
                        <div class="filtros row mb-3 bg-light">
                            <div class="col-md-12">
                                <div class="card border-light bg-light">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3>Selecione os filtros</h3>
                                            </div>    
                                        </div>    
                                        <div class="row">
                                            <div class="col-md-12">
                                                <form>
                                                    <div class="form-group">
                                                        <select class="form-control" id="conditionsselect1">
                                                            <option>Série</option>
                                                            <option>1a série</option>
                                                            <option>2a série</option>
                                                        </select>
                                                        </div>
                                                    <div class="form-group">
                                                        <select class="form-control" id="conditionsselect2">
                                                            <option>Conteúdo</option>
                                                            <option>Língua Portuguesa</option>
                                                            <option>Matemática</option>
                                                            <option>História</option>
                                                            <option>Geografia</option>
                                                            <option>Biologia</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <select class="form-control" id="conditionsselect2">
                                                            <option>Filtro x</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <select class="form-control" id="conditionsselect2">
                                                            <option>Filtro Y</option>
                                                        </select>
                                                    </div>
                                                    <hr>
                                                    <button type="btn" class="btn btn-primary" id="btnPesquisar">Buscar</button>
                                                    <button type="btn" class="btn btn-primary">Reiniciar filtros</button>
                                                    <div class="pb-3"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Resultados -->
                    <div class="col-md-9">
                        <!-- Resultados - Título -->
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <h2> Planos encontrados</h2>
                            </div>    
                        </div>    
                        <!-- Resultados - Planos - 1 por linha  -->
                        <div class="row mb-3 resultados-busca">
                            <div class="col-md-12">
                                <div class="table-wrapper">
                                    <table id="tabelaResultados" class="table-responsive card-list-table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <div id="resultado"></div>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
		<!-- Rodapé da página -->
		<footer class="footer-distributed">
            <div class="footer-left">
                <img src="img/logo.png" class="img-fluid" alt="Logo do c.teach">
                <p class="footer-links">
                <a href="index.html#index">Principal</a> .
                <a href="cadastro.html">Cadastro</a> .
                <a href="acesso.html">Acesso</a>
                </p>
                <p class="footer-company-name">C.teach © 2018</p>
                <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div class="footer-right">
                <p>Contato</p>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="E-mail">
                    <textarea name="message" placeholder="Messagem"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </footer>

        <div id="consulta" class="modal fade" role="dialog"></div>
        <!-- Bootstrap core JavaScript -->
        <script src="vendor/jquery/jquery.min.js"></script>
        <!-- Plugin JavaScript -->
        <script src="vendor/jquery/jquery.easing.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="js/cteach.tmpl.js"></script>
        <!-- Custom scripts for this template -->
        <script src="js/cteach.js"></script>
        <script src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
    </body>
</html>