module.exports.noticias = function(app, request, response){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        response.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function(app, request, response){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);      
    
    var id_noticias = request.query;

    noticiasModel.getNoticia(id_noticias, function (error, result) {
        response.render("noticias/noticia", {noticia : result}); 
    });
}