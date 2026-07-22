import fs from 'fs/promises';

export const getCourses = async (req, res) => {
    const courses = JSON.parse(await fs.readFile('data/course.json', 'utf-8'));
    if (!courses) {
        res.json({ message: "No course found" });
        return;
    }
    res.json({
        message: "Courses fetched successfully",
        courses
    })
    return;
}