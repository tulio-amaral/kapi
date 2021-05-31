import mongoose, { Document, Schema } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/ban-types
type Group = Document & {};

const GroupSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Group>('Group', GroupSchema);
