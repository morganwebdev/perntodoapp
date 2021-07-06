const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "$4Mu3l52789",
  host: "localhost",
  port: 5432,
  database: "todoapp",
});

module.exports = pool;
