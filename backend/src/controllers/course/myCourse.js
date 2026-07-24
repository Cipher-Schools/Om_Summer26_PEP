import User from '../../models/User.js'

export const myCourse = async(req, res) => {
    
    const data = await User.findById(req.user.id)
    .populate(
        req.user.role === 'instructor' ? (
            'createdCourses'
        ) : (
            'enrolledCourses'
        )
    );

    if (req.user.role === 'instructor') {
        res.json({
            message: 'Courses fetched',
            course: data.createdCourses
         });
        return;
    }
    res.json({
        message: 'Courses fetched',
        course: data.enrolledCourses
     });
    return;
}