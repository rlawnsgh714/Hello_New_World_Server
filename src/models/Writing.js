import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Posting = mongoose.model("Posting", postingSchema);

export default Posting;
