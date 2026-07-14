import './cardComponent.css';

function CourseCard(props) {

    return (
        <div className="card">
            <img src={props.image} alt="Course Image" />
            <p>{props.title}</p>
            <p>Instructor: {props.instructor}</p>
            <p>Price: {props.price}</p>
            <p>Level: {props.level}</p>
        </div>
    )
}

export default CourseCard;