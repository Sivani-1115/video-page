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

// GET all courses
router.route('/').get(getCourses);

// GET a single course by ID
router.route('/:id').get(getCourseById);

// POST a new course (admin only)
router.route('/').post(protect, admin, createCourse);

// PUT to update a course (admin only)
router.route('/:id').put(protect, admin, updateCourse);

// DELETE a course (admin only)
router.route('/:id').delete(protect, admin, deleteCourse);

module.exports = router;
