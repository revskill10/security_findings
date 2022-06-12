import { Knex } from "knex";
export type Environment = 'production' | 'local';
export interface Config {
  environment: Environment;
  // ...
  database: Knex.PgConnectionConfig;
}

export interface ProcessVariables {
  ENV?: Environment;
  // ...
  DATABASE_URL?: string;
}

export function getProductionConfig(
    processVariables: ProcessVariables
  ): Config {
    return {
      environment: "production",
      // ...
      database: {
        connectionString: processVariables.DATABASE_URL,
        ssl: true,
      },
    };
}

export function getLocalConfig(processVariables: ProcessVariables): Config {
    return {
      environment: "local",
      // ...
      database: {
        user: "postgres",
        host: "localhost",
        database: "postgres",
        port: 5432,
        password: "secret",
        ssl: false,
      },
    };
}
export const config = process.env.ENV === 'production' ? getProductionConfig({
    ENV: 'production',
    DATABASE_URL: process.env.DATABASE_URL
}) : getLocalConfig({
    ENV: 'local',
    DATABASE_URL: process.env.DATABASE_URL
});