// Importar el servicio
// (lo creamos en el siguiente paso)
const service = require('../services/productosService');



const obtenerTodos = (req, res) => {

    //Validacion
    const productos = service.obtenerTodos();
    res.json();
}

module.exports = {obtenerTodos};