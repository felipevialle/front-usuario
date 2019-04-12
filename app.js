//Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

//Configurações
    //Body Parser
    app.use(bodyParser.urlencoded({urlencoded: true}));
    app.use(bodyParser.json());

    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Arquivos estáticos
    app.use(express.static(path.join(__dirname, 'public')));

//Rotas

//Inicio do Server
app.listen(config.port, ()=> {
    console.log('Server is running under ' + config.port);
});
