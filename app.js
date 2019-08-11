import express from 'express';
import path  from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './route/index';
import usersRouter from './route/users';
import developersRouter from './route/developers.js';

import model from './model/index';

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/developers', developersRouter);

app.listen(process.env.PORT, () =>{
  console.log('Server running on port: '+ process.env.PORT);
});
