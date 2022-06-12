import createKnex, { Knex } from "knex";
import { config } from "src/config";
import { Model } from "objection";
export const db = createKnex({
    client: "pg",
    connection: config.database,
}) as Knex;
Model.knex(db);
export { Model };