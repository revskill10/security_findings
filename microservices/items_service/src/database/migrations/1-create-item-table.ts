import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("repositoryName").notNullable();
    table.string("status").notNullable();
    table.date("queuedAt").notNullable();
    table.date("scanningAt").notNullable();
    table.date("finishedAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("items");
}