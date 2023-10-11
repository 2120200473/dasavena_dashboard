const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '31.220.104.200', // Dirección IP del servidor de la base de datos
  user: 'u382452705_brandon1513', // Nombre de usuario de la base de datos
  password: 'Dasavena23*', // Contraseña de la base de datos
  database: 'u382452705_edasavena', // Nombre de la base de datos
});

module.exports = connection;

