const express = require("express");
const app = express();
const PORT = 3000;
//const MongoClient = require("mongodb").MongoClient;
let db, collection;
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'sdcInfo',
  password: 'password',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query(`SELECT * FROM products WHERE name LIKE 'Intell%' LIMIT 10`, (error, result) => {
    if (error) {
      throw error;
    }
    response.status(200).json(result.rows);
  })
}

app.get('/intell', getUsers);


/*
MongoClient.connect(`mongodb://127.0.0.1`, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    console.log('done me wrong song');
    throw error;
  }
  db = client.db('sdc');
  collection = db.collection('productinfo');
  console.log(`connected to database and collection`);
});

app.use(express.json());

let findDocs = function(callback) {
  collection.find({ category : /Intell%/ } )
    .project({
      product_id: 1,
      name: 1,
      _id: 0
    })
    .limit(10)
    .toArray((err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result)
  })
}

app.get('/intell', (err, res) => {
  //console.time('dbQuery');
  findDocs((error, data) => {
    if (error) {
      res.send(error);
    } else {
      //console.timeEnd('dbQuery');
      res.send(data);
    }
  });
});
*/

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
