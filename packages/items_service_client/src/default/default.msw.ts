/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * items-service
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'
import {
  ItemStatus,
  Severity
} from '.././model'

export const getHealthCheckMock = () => ({status: faker.random.word()})

export const getGetItemsMock = () => ({data: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({finishedAt: faker.helpers.arrayElement([faker.random.word(), undefined]), scanningAt: faker.helpers.arrayElement([faker.random.word(), undefined]), queuedAt: faker.random.word(), findings: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({metadata: {severity: faker.helpers.arrayElement(Object.values(Severity)), description: faker.random.word()}, location: {positions: {begin: {line: faker.datatype.number()}}, path: faker.random.word()}, ruleId: faker.random.word(), type: faker.random.word(), itemId: faker.random.word(), id: faker.random.word()})), repositoryName: faker.random.word(), status: faker.helpers.arrayElement(Object.values(ItemStatus)), id: faker.random.word()}))})

export const getGetItemMock = () => ({data: {finishedAt: faker.helpers.arrayElement([faker.random.word(), undefined]), scanningAt: faker.helpers.arrayElement([faker.random.word(), undefined]), queuedAt: faker.random.word(), findings: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({metadata: {severity: faker.helpers.arrayElement(Object.values(Severity)), description: faker.random.word()}, location: {positions: {begin: {line: faker.datatype.number()}}, path: faker.random.word()}, ruleId: faker.random.word(), type: faker.random.word(), itemId: faker.random.word(), id: faker.random.word()})), repositoryName: faker.random.word(), status: faker.helpers.arrayElement(Object.values(ItemStatus)), id: faker.random.word()}})

export const getCreateItemMock = () => ({data: {finishedAt: faker.helpers.arrayElement([faker.random.word(), undefined]), scanningAt: faker.helpers.arrayElement([faker.random.word(), undefined]), queuedAt: faker.random.word(), findings: [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({metadata: {severity: faker.helpers.arrayElement(Object.values(Severity)), description: faker.random.word()}, location: {positions: {begin: {line: faker.datatype.number()}}, path: faker.random.word()}, ruleId: faker.random.word(), type: faker.random.word(), itemId: faker.random.word(), id: faker.random.word()})), repositoryName: faker.random.word(), status: faker.helpers.arrayElement(Object.values(ItemStatus)), id: faker.random.word()}})

export const getDefaultMSW = () => [
rest.get('*/healthcheck', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getHealthCheckMock()),
        )
      }),rest.get('*/api/v1/items', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetItemsMock()),
        )
      }),rest.get('*/api/v1/items/:itemId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetItemMock()),
        )
      }),rest.post('*/api/v1/item', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getCreateItemMock()),
        )
      }),]