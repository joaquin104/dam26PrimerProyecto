// localHost:3000/api/productos

const express = require('express');

const router = express.Router();

// Importar el servicio
// (lo creamos en el siguiente paso)
const ctrl = require('../controllers/productosController');

router.get('/', ctrl.obtenerTodos)


module.exports = router;