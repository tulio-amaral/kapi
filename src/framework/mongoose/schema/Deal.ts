import mongoose, { Document, Schema } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/ban-types
type Deal = Document & {};

const DealSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  sequence: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    unique: true,
    required: true,
  },
});

export default mongoose.model<Deal>('Deal', DealSchema);
