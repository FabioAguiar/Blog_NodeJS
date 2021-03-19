module.exports.index = function(app, request, response){

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result){
        //console.log(result);
        response.render("home/index", {noticias : result});
    });
}