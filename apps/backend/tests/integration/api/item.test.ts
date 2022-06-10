import supertest from 'supertest';

import { createApp } from 'src/app';

describe('Healthcheck Integration tests', () => {
    let server: Express.Application;

    beforeAll(async () => {
        server = await createApp();
    });

    describe('/api/v1/items', () => {
        it('returns 200', async () => {
            const response = await supertest(server)
            .get('/api/v1/items')
            .set('Content-Type', 'application/json');
            expect(response.status).toBe(200);
        });
    });
    describe('/healthcheck/donotexist', () => {
        it('returns 404', async () => {
            const response = await supertest(server).get('/healthcheck/donotexist');
            expect(response.status).toBe(404);
        });
    });
});
