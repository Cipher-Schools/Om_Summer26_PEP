import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {

    const {toggleTheme} = useContext(ThemeContext); 

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <h3>App</h3>
            <div>
                {/* <p>This is Navbar Component</p> */}
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                {/* <Link to='/about'>About</Link> */}
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>

                <button onClick={() => toggleTheme()}>Toggle</button>
            </div>
        </div>
    )
}

export default Navbar;