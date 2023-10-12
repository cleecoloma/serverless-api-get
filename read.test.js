'use strict';

const { handler } = require('./index.js');

describe('Testing the readCars lambda function', () => {
  test('Should return a list of cars', async () => {
    let response = await handler({});
    expect(response.statusCode).toEqual(200);
    let responseBody = JSON.parse(response.body);
    expect(responseBody[0].brand).toBeTruthy();
  });
});
