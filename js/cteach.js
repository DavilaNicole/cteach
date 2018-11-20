//
// Teste para carregar planos cadastrados. 
//
// Cadastro bem provisório
var planos = {
    plano: [
    {
        "id": 0,
        "titulo": "Matemática 2a série",
        "subtitulo": "Tabuada - 1 ao 10",
        "resumo": "Dinâmica com jogo de tabuleiro para ensinar tabuada",
        "publico": "Estudantes da 2a série do ensino fundamental",
        "duracao": "60 minutos",
        "materiais": "a, b e c",
        "descricao": "Teste de descrição de uma atividade de Matemática para a segunda série do ensino fundamental. Vamos tentar gerar mais linhas para ver como fica",
        "imagem": "img/matematica.png",
        "expectativa": "A expectativa é que os alunxs lindxs aprendam a tabuada!!!",
        "autor": "Nicole Davila",
        "criacao": 20181027
    },
    {
        "id": 1,
        "titulo": "Biologia 6a série",
        "subtitulo": "Corpo humano",
        "resumo": "Ossos do corpo humano.",
        "publico": "Estudantes da 6a série do ensino fundamental",
        "duracao": "30 minutos",
        "materiais": "a, b e c",
        "descricao": "Teste de descrição de uma atividade de Matemática para a segunda série do ensino fundamental. Vamos tentar gerar mais linhas para ver como fica",
        "imagem": "img/biologia.png",
        "expectativa": "A expectativa é que os alunxs lindxs aprendam os ossos do corpo humano!!!",
        "autor": "Nicole Davila",
        "criacao": 20181101
        
    },
  ]
 };
// Após selecionar os filtros o usuário vai pesquisar os planos cadastrados
 $("#btnPesquisar").click(function(){
     var tpl_card = '<tr><td><div class="card"><div class="card-body"><div class="row"><div class="col-md-3"><img src=${imagem}></div><div class="col-md-6 card-body"><div class="list-title"><ul class="list-inline list-unstyled"><li class="list-inline-item"><a href="#"><h4>${titulo}</h4></a></li><li class="list-inline-item text-warning"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li></ul></div><div class="list-location"><p>${subtitulo} </p></div><div class="list-descrip"><small>${resumo}</small></div></div><div class="col-md-3 border-left card-body"><button type="button" class="btn btn-outline-primary" id="btnConsulta" value=${id}>Saiba mais</button></div></div></div></div></td></tr>';
     var resultados = $('#tabelaResultados').html();
 
      for (var i = 0; i < 2; i++){
         $.template( "resultadoTemplate", tpl_card );
         $.tmpl("resultadoTemplate", planos.plano[i] ).appendTo( "#resultado" );
      }
});
 // Ao clicar no botão "Saiba mais" de cadas resultado o usuário pode visualizar a consulta do mesmo
 $('body').on('click','#btnConsulta',function(){
    var id = $(this).val();
    // Título do resultado selecionado
    $('#consulta .modal-header .modal-title').html(planos.plano[id].titulo);
    $('#consulta .modal-body').html(planos.plano[id].subtitulo);
    $('#consulta').modal('show'); 
});