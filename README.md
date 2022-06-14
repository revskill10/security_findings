# Security Findings


## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Frontends, Microservices, Libs and Packages

- `frontends/admin_dashboard`: Contain admin dashboard (App Shell)
- `gateway`: This is microservice API gateway
- `libs/items-domain`: This is a library to contain all types/interfaces for Item and Findings domain. 
- `microservices/items_service`: This is Item microservice which contains all needed operations on Item domain.
- `packages/items_services_client`: This is the generated react-query hooks for items service. It's used in `packages/ui-library`.
- `packages/ui-library`: This is main ui library (microfrontend) for Item domain. It's used in admin dashboard.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

You need to have NodeJS 16, docker and docker compose installed in system.

Start with:

```
npm install
docker compose up -d
```

### Develop

To develop all apps and packages, run the following command:

- Start from the microservices/items_service

Building and generate `docs/openapi.yaml` inside `packages/items_service_client/docs/openapi.yaml`
```
npm i
npm run build
```

Run db migration with 

```
npm run db:migrate
```

Then start service in development:

```
npm run dev
```

- Then go to `packages/items_service_client` to generate client with command

```
npm run generate
```
Then building the package

```
npm run build
```

- After that, you can go to `packages/ui-library` to develop your microfrontend with components and containers

In this case, we're using `react-router-dom`, `formik` and `react-query` libraries.

```
npm i
npm run build
```

- Finally, you can work in `frontends/admin_dashboard`

```
npm i
```

And run `npm run dev` to have it served in `localhost:3051`
