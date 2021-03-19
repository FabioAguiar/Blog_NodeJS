module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(request, response){
        app.app.controllers.admin.formulario_inclusao_noticia(app, request, response);
    });

    app.post('/noticias/salvar', function(request, response){
        app.app.controllers.admin.noticias_salvar(app, request, response);        
    });
};