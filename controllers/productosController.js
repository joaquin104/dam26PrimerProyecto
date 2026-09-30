// Importar el servicio
// (lo creamos en el siguiente paso)
const service = require('../services/productosService');



const obtenerTodos = async (req, res) => {

    //Validacion
    //const productos = service.obtenerTodos();
    //res.json(productos);
    try {
        const productos = await service.obtenerTodos();
        res.json(productos);
    } catch (e) {
        res.status(500).json({error:"error en el servidor"})
    }
}

module.exports = {obtenerTodos};