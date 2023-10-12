'use strict';

const dynamoose = require('dynamoose');

// Define our Schema
const carsSchema = new dynamoose.Schema({
  id: Number,
  brand: String,
  model: String,
  year: Number,
});

// Create our Model
const carsModel = dynamoose.model('Cars', carsSchema);

exports.handler = async (event) => {
  console.log('HERE IS THE EVENT OBJECT ', event);
  // TODO implement

  // carsModel.query('brand').contains('mazda').exec();
  let results = await carsModel.scan().exec();
  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};
