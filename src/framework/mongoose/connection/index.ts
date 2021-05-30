import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/LinkAPI', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));
