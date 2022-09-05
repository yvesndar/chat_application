const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { request } = require("express");

const app = express();
const port = 3308;

app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
  user: "root",
  password: "password",
  host: "localhost",
  database: "react",
});

app.post("/register", (request, response) => {
  const id = request.body.id;
  const names = request.body.names;
  const username = request.body.username;
  const email = request.body.email;
  const password = request.body.password;

  database.query(
    "insert into user (id, names,username,email,password) values (?,?,?,?,?)",
    [id, names, username, email, password],
    (error, result) => {
      if (error) console.log(error);
      console.log(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
