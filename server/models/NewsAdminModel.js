import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  information: {
    type: String,
    required: [true, 'Title is required'],
  },
  timing: {
    type: String,
    required: [true, 'Author is required'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
  },
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

export default News;
