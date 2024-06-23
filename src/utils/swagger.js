const swaggerAutogen = require('swagger-autogen')();
const path = require('path');

const doc = {
  info: {
    title: 'API de Ejemplo',
    description: 'Documentación de la API de Ejemplo',
    version: '1.0.0',
  },
  host: `localhost:${process.env.PORT || 3000}`, // Asegúrate de que process.env.PORT esté configurado correctamente
};

const outputFile = path.resolve(__dirname, '../../swagger-output.json'); // Nueva ruta de salida en el directorio raíz
const routes = [
  path.resolve(__dirname, '../../src/modules/user/user.routes.js'),
  // Agrega más rutas según sea necesario para otros módulos de tu API
];

swaggerAutogen(outputFile, routes, doc).then(() => {
  console.log('Documentación Swagger generada correctamente en:', outputFile);
}).catch((err) => {
  console.error('Error al generar la documentación Swagger:', err);
});
