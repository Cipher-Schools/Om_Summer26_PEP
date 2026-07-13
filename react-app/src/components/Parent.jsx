import { useContext } from "react";
import Child from "./Child";
import { UserContext } from "../context/userContext";

function Parent() {

    const {name} = useContext(UserContext);

    return (
        <div style={{border: '1px solid red', padding: '10px'}}>
            <p>This is Parent Component</p>
            <p>Name: {name}</p>


            <Child />
        </div>
    )
}

export default Parent;