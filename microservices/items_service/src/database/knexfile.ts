import '../module-alias';

import { Knex } from "knex";
import { config } from "src/config";

module.exports = {
  client: "pg",
  connection: config.database,
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
} as Knex.Config;