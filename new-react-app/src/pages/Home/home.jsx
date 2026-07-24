import { useEffect, useState } from "react"
import CourseCard from "../../components/cardComponent/CardComponent";

export const Home = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        const fetchCourses = () => {

            fetch('http://localhost:3000/course/get-courses')
            .then(res => res.json())
            .then(data => setCourse(data.courses));
        }

        fetchCourses();

    }, [])

    return (
        <div>
            <h2>Courses</h2>
            {course.length === 0 ? (
                <p>No course to display</p>
            ) : (
                course.map(course => (
                    <div>
                        <CourseCard
                            image={course.imageUrl}
                            title={course.title}
                            // instructor={course.instructor}
                            price={course.price}
                            level={course.level}
                        />
                    </div>
                ))
            )}
        </div>
    )
}