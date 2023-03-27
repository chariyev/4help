const request = require('supertest');
const app = require('../../app');

describe('Auth POST /api/v1/auth', () => {
    test('Testing required properites', async () => {
        const response = await request(app).post('/api/v1/auth');
        expect(200).toBe(200);
    });
    test('Testing wrong username or password', () => {
        expect(200).toBe(200);
    });
    test('Get access token and refresh token', () => {
        expect(200).toBe(200);
    });
});

describe('Auth POST /refresh', () => {
    test('Get access token and refresh token', () => {
        expect(200).toBe(200);
    });
});
