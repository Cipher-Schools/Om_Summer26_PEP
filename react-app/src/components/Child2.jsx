import React from "react";

const Child2 = React.memo(({handleClick}) => {

    console.log('Child2 rendered');

    return (
        <div style={{border: '1px solid gray'}}>
            <p>This is 2nd Child</p>
            <button onClick={handleClick}>Child2 Button</button>
        </div>
    )
})

export default Child2;