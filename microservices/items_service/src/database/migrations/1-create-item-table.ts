import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("repository_name").notNullable();
    table.string("status").notNullable();
    table.date("queued_at").notNullable();
    table.date("scanning_at").nullable();
    table.date("finished_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("items");
}