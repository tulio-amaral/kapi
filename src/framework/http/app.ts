import express, { json, NextFunction, Request, Response } from 'express';
import 'dotenv/config';

import AppError from './errors/AppError';
import router from './routes';
import '../mongoose/connection';

const app = express();

// mongoose
//   .connect('mongodb://localhost/LinkAPI', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connected'));

app.use(json());
app.use(router);

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
