// // Los datos — hoy hardcodeados
// // La próxima clase → consulta a Supabase
// const productos = [
//   { id: 1, nombre: 'Notebook Actualizada', precio: 500000 },
//   { id: 2, nombre: 'Mouse',    precio: 15000  },
//   { id: 3, nombre: 'Teclado',  precio: 25000  },
// ];

// console.log("SERVICIO");


// const supabase = require('../config/supabase');
// // Devolver todos
// const obtenerTodos = async () => {

//   //return productos;

//   const { data, supabase } = await supabase
//     .from('productos')
//     .select('*');
//   if (error) throw error;
//   return data;

// };

// // Exportar las funciones disponibles
// module.exports = { obtenerTodos };

const supabase = require('../config/supabase');

const obtenerTodos = async () => {
  const { data, error } = await supabase
    .from('productos')
    .select('*');

  if (error) throw error;
  return data;
};

module.exports = { obtenerTodos };