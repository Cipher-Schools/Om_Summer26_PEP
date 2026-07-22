import Course from '../../models/Course.js';

export const addCourse = async (req, res) => {
    const {
        title,
        instructor,
        price,
        duration,
        level,
        image
    } = req.body;


}