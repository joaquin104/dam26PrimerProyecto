const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});

app.use('/api/productos', require ('./routes/productosRoutes'));


// Ruta de productos — datos hardcodeados



app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});