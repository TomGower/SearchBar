const mysql = require("mysql");
const mysqlConfig = require("./Mattconfig.js");

const connection = mysql.createConnection(mysqlConfig);

//old query that gets all products
// const getProducts = function(callback) {
//   connection.query(`Select * from products`, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       callback(null, data);
//     }
//   });
// };

const getProducts = function(inputString, currentCategory, callback) {
  if (currentCategory !== "All") {
    connection.query(
      `SELECT p.name, p.id FROM Products p 
      INNER JOIN Categories c 
      ON p.category_id = c.id 
      WHERE p.name LIKE '${inputString}%' AND c.name = '${currentCategory}'`,
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
      `SELECT name, id from Products WHERE name LIKE '${inputString}%'`,
      (err, data) => {
        if (err) {
          throw err;
        } else {
          callback(null, data);
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

module.exports = {
  getProducts,
  insertProduct,
  getCategories
};
