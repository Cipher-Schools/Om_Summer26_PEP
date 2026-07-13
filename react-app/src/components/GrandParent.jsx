import Parent from "./Parent";

function GrandParent() {

    return (
        <div style={{border: '1px solid gray', padding: '10px'}}>
            <p>This is GrandParent Component</p>

            {/* <Parent name={name} /> */}
            <Parent />
        </div>
    )
}

export default GrandParent;