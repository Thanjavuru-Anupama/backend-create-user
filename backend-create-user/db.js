const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "anupama",
  password: "password",
  database: "menu_db",
});

module.exports = connection;
