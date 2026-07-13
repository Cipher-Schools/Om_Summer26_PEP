import React from "react";
import GrandChild from "./GrandChild";

// const Child = ({name})  => {

//     console.log('Child component rendered!');

//     return (
//         <div>
//             <p>This is child component {name}</p>
//         </div>
//     )
// }


const Child = React.memo(()  => {

    console.log('Child component rendered!');

    return (
        <div style={{border: '1px solid green', padding: '10px'}}>
            {/* <p>This is child component {name}</p> */}
            <p>This is child component</p>

            <GrandChild />
        </div>
    )
})

export default Child;