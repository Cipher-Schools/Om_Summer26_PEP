import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {

    const {toggleTheme} = useContext(ThemeContext); 

    return (
        <div>
            {/* <p>This is Navbar Component</p> */}
            <Link to='/'>Dashboard</Link>
            {/* <Link to='/about'>About</Link> */}
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>

            <button onClick={() => toggleTheme()}>Toggle</button>
        </div>
    )
}

export default Navbar;