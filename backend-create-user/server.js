const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const app = express();

app.use(cors());
app.use(bodyParser.json());

db.connect(function (err) {
  if (err) console.log("Cannot Connect", err);
  else {
    console.log("Connection successful");
  }
});

app.post("/create-user", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  if (!firstName || !lastName) {
    return res.status(400);
  }

  db.query(
    `INSERT INTO users (first_name, last_name) VALUES("${firstName}", "${lastName}")`,
    function (err, res, fields) {
      if (err) throw err;
      else {
        console.log("Inserted into the table");
      }
    }
  );
});

app.listen(9000);
