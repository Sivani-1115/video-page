// controllers/reviewController.js
const Review = require('../models/Review');

// Add a review
exports.addReview = async (req, res) => {
    try {
        const { courseId, userId, rating, comment } = req.body;
        const newReview = new Review({ course: courseId, user: userId, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get reviews for a course
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ course: req.params.courseId }).populate('user');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
