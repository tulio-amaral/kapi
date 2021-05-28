import mongoose, { Document, Schema } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/ban-types
type Deals = Document & {};

const DealsSchema = new Schema({
  date: {
    type: Date,
    unique: true,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Deals>('Deals', DealsSchema);
