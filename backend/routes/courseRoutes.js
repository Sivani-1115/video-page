const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getCourses);
router.route('/:id').get(getCourseById);
router.route('/').post(protect, admin, createCourse);
router.route('/:id').put(protect, admin, updateCourse);
router.route('/:id').delete(protect, admin, deleteCourse);
module.exports = router;
