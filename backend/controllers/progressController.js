
const Progress = require('../models/Progress');


exports.updateProgress = async (req, res) => {
    try {
        const { courseId, userId, progress } = req.body;
        const userProgress = await Progress.findOneAndUpdate(
            { course: courseId, user: userId },
            { progress },
            { new: true, upsert: true }
        );
        res.json(userProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getProgress = async (req, res) => {
    try {
        const { courseId, userId } = req.params;
        const userProgress = await Progress.findOne({ course: courseId, user: userId });
        res.json(userProgress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
