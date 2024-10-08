// controllers/resourceController.js
const Resource = require('../models/Resource');


exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find({ course: req.params.courseId });
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.addResource = async (req, res) => {
    try {
        const { courseId, title, url } = req.body;
        const newResource = new Resource({ course: courseId, title, url });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
