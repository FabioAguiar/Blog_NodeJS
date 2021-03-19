module.exports.formulario_inclusao_noticia = function (app, request, response) {
    response.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function (app, request, response) {
    var noticia = request.body;

        request.assert('titulo', 'Título é obrigatório').notEmpty();
        request.assert('resumo', 'Resumo é obrigatório').notEmpty();
        request.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        request.assert('autor', 'Autor é obrigatório').notEmpty();
        request.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        request.assert('noticias', 'Noticia é obrigatório').notEmpty();

        var erros = request.validationErrors();

        if(erros){
            response.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);        

        noticiasModel.salvarNoticia(noticia, function (error, result) {
            response.redirect('/noticias');
        });
}