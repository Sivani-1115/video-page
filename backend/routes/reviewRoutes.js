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

router.route('/course/:courseId').get(getReviews);
router.route('/').post(protect, addReview);
router.route('/:id').get(getReviewById);
router.route('/:id').put(protect, updateReview);
router.route('/:id').delete(protect, deleteReview);
module.exports = router;
