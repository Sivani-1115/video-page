const express = require('express');
const router = express.Router();
const {
  getReviews,
  addReview,
  getReviewById,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// GET all reviews for a course
router.route('/course/:courseId').get(getReviews);

// POST a new review (logged-in users only)
router.route('/').post(protect, addReview);

// GET a single review by ID
router.route('/:id').get(getReviewById);

// PUT to update a review (logged-in users only)
router.route('/:id').put(protect, updateReview);

// DELETE a review (logged-in users only)
router.route('/:id').delete(protect, deleteReview);

module.exports = router;
