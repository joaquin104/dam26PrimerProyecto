const express = require('express');
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});

app.use('/api/productos', require ('./routes/productosRoutes'));


// Ruta de productos — datos hardcodeados
app.get('/', (req, res) => {
  res.json([
    { id: 1, nombre: 'Notebook', precio: 500000 },
    { id: 2, nombre: 'Mouse',    precio: 15000  },
    { id: 3, nombre: 'Teclado',  precio: 25000  },
  ]);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});