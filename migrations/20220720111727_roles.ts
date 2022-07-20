import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable('roles').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('roles', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('description').defaultTo('');

        table.timestamps(true, true);
      });
    }
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('roles');
}
