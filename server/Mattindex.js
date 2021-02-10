const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/products", (req, res) => {
  var inputString = req.query.inputString;
  var currentCategory = req.query.currentCategory;
  db.getProducts(inputString, currentCategory, (err, data) => {
    if (err) throw error;
    res.send(data);
  });
});

app.get("/categories", (req, res) => {
  db.getCategories((err, data) => {
    if (err) throw error;
    res.send(data);
  });
});

// app.post(
//   "http://nodedockersearch-env.z6b7pgpgn9.us-east-2.elasticbeanstalk.com/products",
//   (req, res) => {
//     db.insertProduct(
//       req.body.productId,
//       req.body.productName,
//       req.body.category_id,
//       (err, data) => {
//         if (err) throw err;
//         res.send(data);
//       }
//     );
//   }
// );

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
