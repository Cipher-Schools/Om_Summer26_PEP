import Parent from "./Parent";

function GrandParent() {

    return (
        <div>
            <p>This is GrandParent Component</p>
            <Parent />
        </div>
    )
}


export default GrandParent;