const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 4500;

const connection = mysql.createConnection({
    host: "localhost",
    database: "bull-run",
    user: "root",
    password: ""
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/register', (req, res) => {
    const sql = "INSERT INTO `stock_tips`(`date`, `tips`,`stockname`) VALUES (?)";
    const values = [
        req.body.date,
        req.body.tips,
        req.body.stockname,
    ]
    connection.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ Error: "Inserting  data error in Server" })
        }
        return res.json({ Status: "Success" });
    })
})

app.get('/register', (req, res) => {
  connection.query("SELECT * FROM `stock_tips` ", (err, results, fields) => {
    if(err) throw err;
    res.send(results);
  });
});


app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on localhost:${port}`)
});