const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    photo: { type: String }
  },
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
      duration: { type: Number, required: true },
      captions: { type: String }
    }
  ],
  resources: [
    {
      name: { type: String },
      url: { type: String }
    }
  ],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
