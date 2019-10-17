var express = require('express');
var router = express.Router();
var node

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Pagina Inicial',
    nav: [{
        id: '1',
        nome: 'pedro',
        sobreme: 'meida',
        apelido: 'pedrinho'
      },
      {
        id: '2',
        nome: 'marco',
        sobreme: 'antonio',
        apelido: 'marco'
      },
      {
        id: '3',
        nome: 'mathias',
        sobreme: 'gonsalves',
        apelido: 'gon'
      },
    ]
  });
});

module.exports = router;