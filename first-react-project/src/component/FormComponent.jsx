import { useEffect } from "react";
import { useState } from "react";

function StudentForm() {

    const [name, setName] = useState('');
    const [regId, setRegId] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [designation, setDesignation] = useState('student');

    // const [studentDetails, setStudentDetails] = useState();
    // const [showData, setShowData] = useState(false);
    const [studentsDetails, setStudentsDetails] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('studentsData');
        if (data) {
            setStudentsDetails(JSON.parse(data));
        }
    }, [])

    function students() {
        const newStudent = {
            name,
            regId,
            email,
            age,
            city,
            designation
        }

        const allStudents = [...studentsDetails, newStudent];

        setStudentsDetails(allStudents);
        localStorage.setItem('studentsData', JSON.stringify(allStudents));

        setName('');
        setRegId('');
        setEmail('');
        setAge();
        setCity('');
        setDesignation('');
    }

    // function student() {
    //     setStudentDetails({
    //         name: name,
    //         regId: regId,
    //         email,
    //         age,
    //         city,
    //         designation
    //     });

    //     setName('');
    //     setRegId('');
    //     setEmail('');
    //     setAge();
    //     setCity('');
    //     setDesignation('');

    //     console.log('name: ', name);
    // }

    
    return (
        <div>
            <h2>Enter Your Details</h2>
            <input type="text" name="name" id="" placeholder="Enter your name" value={name}
                onChange={(e) => setName(e.target.value)}
             />
            <input type="text" name="regdId" placeholder="Enter Registration Id" value={regId}
                onChange={(e) => setRegId(e.target.value)}
            />
            <input type="email" name="email" id="" placeholder="Email Id"  value={email}z
                onChange={e => setEmail(e.target.value)}
            />
            <input type="number" name="age" id="" placeholder="Age" value={age}
            onChange={e => setAge(e.target.value)}
            />
            <input type="text" name="city" placeholder="City Name"  value={city}
                onChange={e => setCity(e.target.value)}
            />
            <select name="designation" id="" value={designation}
                onChange={e => setDesignation(e.target.value)}
            >
                <option value="student">Student</option>
                <option value="scholar">Scholar</option>
                <option value="teacher">Teacher</option>
            </select>
            {/* <button onClick={() => setShowData(true) }>Add Details</button>   */}
            <button onClick={students}>Add Details</button>

            {/* {showData && ( */}
            {/* {studentDetails && (
                <div>
                <h2>Student Data</h2>
                <p>Name: {studentDetails.name}</p>
                <p>Registration Id: {studentDetails.regId}</p>
                <p>Email: {studentDetails.email}</p>
                <p>Age: {studentDetails.age}</p>
                <p>City: {studentDetails.city}</p>
                <p>Designation: {studentDetails.designation}</p>
            </div>
            )}    */}
            <h2>Student Data</h2>
            {studentsDetails.map((student, index) => {
                return (
                    <div id={index}>
                        <p>Name: {student.name}</p>
                        <p>Registration Id: {student.regId}</p>
                        <p>Email: {student.email}</p>
                        <p>Age: {student.age}</p>
                        <p>City: {student.city}</p>
                        <p>Designation: {student.designation}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default StudentForm;

