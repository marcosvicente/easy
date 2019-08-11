import mongoose from 'mongoose';

import Developer from './developer';

require('dotenv').config();

mongoose.connect(process.env.DATABASE_HOST, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to Database');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});

const models = { Developer };

export default models;
