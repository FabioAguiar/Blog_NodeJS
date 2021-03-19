

var server = http.createServer( function( resquest, response ){

    var categoria = resquest.url;

    if(categoria == '/tecnologia'){
        response.end("<html>Noticias de Tecnologia</body></html>");

    }else if(categoria == '/moda'){
        response.end("<html><body>Noticias de Moda</body></html>");

    }else if(categoria == '/beleza'){
        response.end("<html><body>Noticias de Beleza</body></html>");

    }else{
        response.end("<html><body>Portal de notícias</body></html>");

    }

});

server.listen(3000);