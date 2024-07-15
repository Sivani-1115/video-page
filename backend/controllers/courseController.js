// controllers/courseController.js
const Course = require('../models/Course');


exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.addCourse = async (req, res) => {
    try {
        const { title, description, instructor, videoUrl, resources } = req.body;
        const newCourse = new Course({ title, description, instructor, videoUrl, resources });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
