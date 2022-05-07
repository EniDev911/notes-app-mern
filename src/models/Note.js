import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 20,
    trim: true
  },
  description: { type: String, required: true },
}, {
  timestamp: true,
  versionKey: false
});

export default model('Note', noteSchema);