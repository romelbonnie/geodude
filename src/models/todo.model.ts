import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    status: { type: Number },
  },
  { timestamps: true },
);

const Todos = mongoose.model('Todos', schema);
export default Todos;
