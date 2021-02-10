const url = 'mongodb://localhost:27017';
const MongoClient = require("mongodb").MongoClient;
const faker = require('faker');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id = { type: Number },
  name: { type: String },
  category: { type: String },
})

/*
let Product = mongoose.model('sdcInfo', productSchema);

let foo = async function() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropDatabase(function(err, res) {
      db.close(true, function(err, res) {
        callback(null, 'dropped existing database')
      })
    })
  })

  const itemCollection = db.collection('items');

  function(callback) {
    let fakeProducts = [];
    const desiredFakeProducts = 10000;
    for (let j = 0; j < 1000; j++) {
      fakeProducts = [];
      for (let i = 0; i < desiredFakeProducts; i++) {
        let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
        fakeProducts[j] = {
          product_id: i*1000+j+1,
          name: faker.lorem.word(),
          category: categories[(i % 6)]
        };
      }
      itemCollection.insert(fakeProducts);
    }
  }


};

exports.seed = async function (knex, Promise) {
  let fakeProducts = [];
  const desiredFakeProducts = 10000;
  for (let j = 0; j < 1000; j++) {
    for (let i = 0; i < desiredFakeProducts; i++) {
      let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
      fakeProducts.push({
        name: faker.lorem.word(),
        category: categories[(i % 6)]
      })
    }
    await knex("productInfo")
      .insert(fakeProducts)
    setTimeout(() => {fakeProducts = []}, 10);
  }
};

const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://127.0.0.1:27017";

const dbName = "sdcInfo";

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  const db = client.db(dbName);

  const itemCollection = db.collection('items');

  let fakeProducts = {};
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 1000; j++) {
      let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
      fakeProducts[j] = {
        product_id: i*1000+j+1,
        name: faker.lorem.word(),
        category: categories[(i % 6)]
      };
    itemCollection.insert(fakeProducts);
    setTimeout(() => {fakeProducts = {}}, 10);
    }
  }
  client.close();
})
*/