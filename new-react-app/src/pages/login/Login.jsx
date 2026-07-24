import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <div>
            <h2>Login</h2>

            <input 
                type="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Enter Password" 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;