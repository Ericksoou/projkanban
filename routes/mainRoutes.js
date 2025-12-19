const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

router.get('/', mainController.mostraPaginaKanban);

// router.get('/cadastrar', mainController.mostraPaginaCadastrar);
// router.post('/cadastrar', mainController.cadastrarExemplo);

// router.get('/alterarexemplo/:id', mainController.mostraPaginaAlterar);
// router.post('/alterarexemplo/', mainController.alterarExemplo);

// router.get('/excluirexemplo/:id', mainController.excluirExemplo);

module.exports = router;