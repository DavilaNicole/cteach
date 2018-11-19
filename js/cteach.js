$("#btnConsulta").click(function(){
    var planos = {
        plano: [
        {
            "titulo": "Matemática 2a série",
            "subtitulo": "Tabuada - 1 ao 10",
            "resumo": "Dinâmica com jogo de tabuleiro para ensinar tabuada.",
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
    
    var tpl_consulta = '<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">${titulo}</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><div class="row"><div class="col-sm-2"></div><div class="col-sm-10"><h5>${subtitulo}</h5><p>${resumo}</p></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Voltar</button></div></div></div>';

    $.template( "consultaTemplate", tpl_consulta );
    $.tmpl("consultaTemplate", planos.plano[0] ).appendTo( "#consulta" );
    $('#consulta').modal('show'); 
    $('#consulta').modal('hide'); 
});


// $("#btnPesquisar").click(function(){
//     var tpl_card = '<td><div class="card"><div class="card-body"><div class="row"><div class="col-md-3"><img src=${imagem}></div><div class="col-md-6 card-body"><div class="list-title"><ul class="list-inline list-unstyled"><li class="list-inline-item"><a href="#"><h4>${titulo}</h4></a></li><li class="list-inline-item text-warning"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li></ul></div><div class="list-location"><p>${subtitulo} </p></div><div class="list-descrip"><small>$resumo</small></div></div><div class="col-md-3 border-left card-body"><button type="button" class="btn btn-outline-primary" id="btnConsulta">Saiba mais</button></div></div></div></div></td>';

//     var planos = {
//         plano: [
//         {
//             "titulo": "Matemática 2a série",
//             "subtitulo": "Tabuada - 1 ao 10",
//             "resumo": "Dinâmica com jogo de tabuleiro para ensinar tabuada.",
//             "publico": "Estudantes da 2a série do ensino fundamental",
//             "duracao": "60 minutos",
//             "materiais": "a, b e c",
//             "descricao": "Teste de descrição de uma atividade de Matemática para a segunda série do ensino fundamental. Vamos tentar gerar mais linhas para ver como fica",
//             "imagem": "img/matematica.png",
//             "expectativa": "A expectativa é que os alunxs lindxs aprendam a tabuada!!!",
//             "autor": "Nicole Davila",
//             "criacao": 20181027
//         },
//         {
//             "titulo": "Biologia 6a série",
//             "subtitulo": "Corpo humano",
//             "resumo": "Ossos do corpo humano.",
//             "publico": "Estudantes da 6a série do ensino fundamental",
//             "duracao": "30 minutos",
//             "materiais": "a, b e c",
//             "descricao": "Teste de descrição de uma atividade de Matemática para a segunda série do ensino fundamental. Vamos tentar gerar mais linhas para ver como fica",
//             "imagem": "img/biologia.png",
//             "expectativa": "A expectativa é que os alunxs lindxs aprendam os ossos do corpo humano!!!",
//             "autor": "Nicole Davila",
//             "criacao": 20181101
//         },
//       ]
//      };
    //  var resultados = $('#tabelaResultados').html();
 
    //  for (var i = 0; i < 2; i++){
    //     console.log("isso");
    //     $.template( "resultadoTemplate", tpl_card );
    //     $.tmpl("resultadoTemplate", planos.plano[i] ).appendTo( "#resultado" );
    //  }
    

// });

