const path = require('path');
//const pwd = require(path.join(__dirname, pwd.js));

module.exports = {
  development : {
    client: 'postgresql',
    connection: `postgres://postgres:password@localhost:5432/sdcInfo`,
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }
}