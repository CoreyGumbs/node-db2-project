
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
        tbl.integer('year').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('year');
  });
};
