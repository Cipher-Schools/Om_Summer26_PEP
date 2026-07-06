import { useState } from "react";

function StudentForm() {

    const [name, setName] = useState('');
    const [regId, setRegId] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [designation, setDesignation] = useState('student');
 
    
    return (
        <div>
            <h2>Enter Your Details</h2>
            <input type="text" name="name" id="" placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
             />
            <input type="text" name="regdId" placeholder="Enter Registration Id" 
                onChange={(e) => setRegId(e.target.value)}
            />
            <input type="email" name="email" id="" placeholder="Email Id" 
                onChange={e => setEmail(e.target.value)}
            />
            <input type="number" name="age" id="" placeholder="Age" 
            onChange={e => setAge(e.target.value)}
            />
            <input type="text" name="city" placeholder="City Name" 
                onChange={e => setCity(e.target.value)}
            />
            <select name="designation" id=""
                onChange={e => setDesignation(e.target.value)}
            >
                <option value="student">Student</option>
                <option value="scholar">Scholar</option>
                <option value="teacher">Teacher</option>
            </select>
            <button>Add Details</button>     
                 
        </div>
    )
}

export default StudentForm;

