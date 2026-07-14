import { useContext } from "react";
import CourseCard from "../../components/cardComponent/CardComponent";
import courses from "../../data/courses";
import { ThemeContext } from "../../context/ThemeContext";
import './dashboard.css';

function Dashboard() {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            <p>This is Dashboard Page</p>
            {/* Theme: {theme} */}
            {/* <CourseCard 
                image="https://picsum.photos/300/200?1" 
                instructor="Om Jaiswal" 
                title="Complete MERN Stack Development"
                price="499"
                level="Beginner"

            /> */}
            {courses.map(course => (
                <div>
                    <CourseCard
                        image={course.image}
                        title={course.title}
                        instructor={course.instructor}
                        price={course.price}
                        level={course.level}
                    />
                </div>
            ))}

        </div>
    )
}

export default Dashboard;