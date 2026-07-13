import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function GrandChild() {

    const {user, setUser} = useContext(UserContext);
    const [name, setName] = useState('');

    return (
        <div style={{border: '1px solid gray', padding: '20px'}}>
            <p>This is GrandChild Component</p>
            <p>User: {user}</p>
            <input 
                onChange={e => setName(e.target.value)}
             type="text" name="" id="" placeholder="Enter user Name" />
             <button 
                onClick={() => setUser(name) }
             >Update User Name</button>
        </div>
    )
}


export default GrandChild;