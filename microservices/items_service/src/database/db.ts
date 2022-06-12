import { Knex } from "knex";
import { config } from "src/config";

export const db = require("knex")({
    client: "pg",
    connection: config.database,
}) as Knex;