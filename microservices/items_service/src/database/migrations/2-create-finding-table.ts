import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("findings", (table) => {
    table.increments("id").primary();
    table.integer("item_id")
        .notNullable()
        .references("id")
        .inTable("items")
        .onDelete("CASCADE");
    table.string("findingType").notNullable();
    table.date("ruleId").notNullable();
    table.jsonb("location").notNullable();
    table.jsonb("metadata").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("findings");
}