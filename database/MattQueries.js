/*
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

const getProducts = function(inputString, currentCategory, callback) {
  if (currentCategory !== "All") {
    connection.query(
      Matt: `SELECT p.name, p.id FROM Products p 
      INNER JOIN Categories c 
      ON p.category_id = c.id 
      WHERE p.name LIKE '${inputString}%' AND c.name = '${currentCategory}'`,

      Postgres, singleDB: `SELECT name, product_id FROM products WHERE name LIKE '${inputString} AND category = '${currentCategory}'`
      Postgres, multiDB: `SELECT name, product_id FROM ${currentCategory.toLowerCase()} WHERE name LIKE '${inputString}'`
      Mongo: `{sdc.productinfo.find({ category : /${inputString}/, field2 : ${currentCategory}}, { name, category }).limit(10)}`


      `SELECT 
      (err, data) => {
        if (err) {
          throw err;
        } else {
          callback(null, data);
        }
      }
    );
  } else {
    connection.query(
      inputString = inputString[0].toUpperCase() + inputString.substr(1).toLowerCase();
      Matt: `SELECT name, id from Products WHERE name LIKE '${inputString}%'`,
      Postgres: `SELECT product_id, name FROM products WHERE name LIKE '${inputString}%`
      Mongo: `{sdcinfo.productinfo.find({ category : /${inputString}/}, {name, category}).limit(10)}`,

      (err, data) => {
        if (err) {
          throw err;
        } else {
          callback(null, data.toArray());
        }
      }
    );
  }
};

const getCategories = function(callback) {
  connection.query(`SELECT * FROM Categories`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  });
};

const insertProduct = function(productId, productName, category_id, callback) {
  connection.query(
    `Insert into products (id, name, category_id) values ('${productId}', '${productName}','${category_id}')`,
    (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(null, data);
      }
    }
  );
};
*/