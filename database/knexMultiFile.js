const faker = require("faker");

let testFunc = function () {
  let fakeProducts = [];
  let hockeyItems = [];
  let syrupItems = [];
  let musicItems = [];
  let campingItems = [];
  let huntingItems = [];
  let foodItems = [];
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 100; j++) {
      let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
      thisId = i * 10000 + j;
      thisName = faker.commerce.productName();
      thisCategory = categories[(j % 6)];
      if (thisCategory === 'Hockey') {
        hockeyItems.push({product_id: thisId, name: thisName});
      } else if (thisCategory === 'Syrup') {
        syrupItems.push({product_id: thisId, name: thisName});
      } else if (thisCategory === 'Music') {
        musicItems.push({product_id: thisId, name: thisName});
      } else if (thisCategory === 'Camping') {
        campingItems.push({product_id: thisId, name: thisName});
      } else if (thisCategory === 'Hunting') {
        huntingItems.push({product_id: thisId, name: thisName});
      } else if (thisCategory === 'food') {
        foodItems.push({product_id: thisId, name: thisName});
      }
      fakeProducts[j] = {
        product_id: thisId,
        name: thisName,
        category: thisCategory
      };
    }
    console.log(fakeProducts);
    console.log('hockey', hockeyItems);
    /*
    setTimeout(() => {fakeProducts = []; hockeyItems = []; syrupItems = []; musicItems = [];
      campingItems = []; huntingItems = []; foodItems = [];}, 0);
    }
    */
  };
};

testFunc();

/*
    let fakeProducts = [];
    const desiredFakeProducts = 10000;
    for (let j = 0; j < 1000; j++) {
      for (let i = 0; i < desiredFakeProducts; i++) {
        let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
        fakeProducts.push({
          name: faker.commerce.productName(),
          category: categories[(i % 6)]
        })
      }
      await knex("productInfo")
      .insert(fakeProducts)
    setTimeout(() => {fakeProducts = []}, 10);
  }
  */