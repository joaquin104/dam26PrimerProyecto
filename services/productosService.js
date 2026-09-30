// Los datos — hoy hardcodeados
// La próxima clase → consulta a Supabase
const productos = [
  { id: 1, nombre: 'Notebook', precio: 500000 },
  { id: 2, nombre: 'Mouse',    precio: 15000  },
  { id: 3, nombre: 'Teclado',  precio: 25000  },
];

console.log("SERVICIO");

// Devolver todos
const obtenerTodos = () => {

  return productos;
  
};

// Exportar las funciones disponibles
module.exports = { obtenerTodos };