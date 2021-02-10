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