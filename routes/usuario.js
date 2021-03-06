var express = require('express');
var router = express.Router();

//Lista os usuários
router.get('/', function(req, res, next) {
    //res.render('home', {layout: 'main', template: 'home-template'});
    res.render('home');
  });

router.get("/usuario", (req, res) => {
    //res.send('Página de Cadastro de Usuário');
    res.render('pages/cadastro');
});

//Lista os usuários
router.post("/usuario/:id", (req, res) => {
    res.send('Página de cadastro de um novo usuário');
});

//Deleta um usuário
router.delete("/usuario", (req, res) => {
    res.send('Página de exclusão de um novo usuário');
});

module.exports = router;