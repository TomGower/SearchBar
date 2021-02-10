const faker = require("faker");

let testFunc = function() {
  let fakeProducts = [];
  const desiredFakeProducts = 10000;
  let d = new Date();
  let n = d.getTime();
  console.log(n);
  for (let j = 0; j < 1000; j++) {
    for (let i = 0; i < desiredFakeProducts; i++) {
      let categories = ['Hockey', 'Syrup', 'Music', 'Camping', 'Hunting', 'Food'];
      fakeProducts.push({
        name: faker.lorem.word(),
        category: categories[(i % 6)]
      })
    }
    console.log('loop done');
    setTimeout(() => {fakeProducts = []}, 10);
  }
  let d2 = new Date();
  let n2 = d2.getTime();
  console.log('second time', n2);
}

testFunc();