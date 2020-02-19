//apply changes
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('make', 256).notNullable().index();
      tbl.string('model', 256).notNullable().index();
      tbl.string('transmission_type', 256).nullable();
      tbl.string('title_status', 256).nullable();
      tbl.integer('mileage').notNullable();
      tbl.string('vin_num').notNullable();
      tbl.timestamps();
  });
};

//undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
