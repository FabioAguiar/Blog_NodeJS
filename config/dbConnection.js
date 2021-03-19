var mysql = require('mysql');

var connMySQL = function(){
    //console.log('Conexão com o banco foi estabelecida');
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}


module.exports = function(){
    //console.log('O autload carregou o modulo de conexão com bd');
    return connMySQL;
}

