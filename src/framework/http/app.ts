import express, { json, NextFunction, Request, Response } from 'express';

import AppError from './errors/AppError';
import '../mongoose/connection';

const app = express();

app.use(json());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

export default app;
