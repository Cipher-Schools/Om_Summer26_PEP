import { useState } from "react"

function Login({email, setEmail}) {

    // const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return (
        <div>
            <h2>Login Page</h2>

            <input type="email" name="" id="" placeholder="email" 
            onChange={e => setEmail(e.target.value)}
            />
            <input type="password" placeholder="password" />
            <button
                onClick={() => alert(`Email: ${email}`)}
            >Login</button>
        </div>
    )
}

export default Login