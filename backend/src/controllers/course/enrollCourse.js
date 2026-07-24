import Course from '../../models/Course.js';
import User from '../../models/User.js'

export const enrollCourse = async (req, res) => {
    try {
        const { courseId } = req.body;

        const course = await Course.findById(courseId);

        if (!course) {
            res.json({ message: 'Course not found' });
            return;
        }

        await User.findByIdAndUpdate(
            req.user.id,
            {
                $addToSet: {
                    enrolledCourses: courseId
                }
            }
        )

        res.json({ 
            message: 'Cousre enrolled successfully'
        })

    
    } catch (err) {
        console.log("Error:", err);
    }
    
}