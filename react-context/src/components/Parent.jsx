import { useContext, useState } from "react";
import Child from "./Child";
import { UserContext } from "../context/UserContext";

function Parent() {

    const {user} = useContext(UserContext);

    return (
        <div>
            <p>This is Parent Component</p>
            <p>User inside parent: {user}</p>

            <Child />
        </div>
    )
}


export default Parent;