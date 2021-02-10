
exports.up = async function(knex, Promise) {
  await knex.schema.createTable("productInfo", table => {
    table
      .increments("user_id")
      .unsigned()
      .primary()
    table
      .string("name")
      .unique()
      .notNullable()
    table.integer("category").notNullable();
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("productInfo"); 
};
