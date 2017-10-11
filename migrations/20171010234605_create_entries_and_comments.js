
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image_url').notNullable();
    table.string('content').notNullable();
    table.integer('user_id').references('users.id').notNullable();
  }).createTable('comments', function (table) {
    table.increments('id').primary();
    table.string('content').notNullable();
    table.integer('user_id').references('users.id').notNullable();
    table.integer('entries_id').references('entries.id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries')
  .dropTable('comments');
};

