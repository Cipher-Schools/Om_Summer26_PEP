import { useState } from 'react'
import Hello from './component/Hello';
import './App.css'
import StudentForm from './component/FormComponent';

function App() {

  // function MinusCount() {
  //   count -= 1;
  // }

  let [count, setCount] = useState(0);

  return (
    <div>
      {/* <p>Hello World</p>
      <p>Hi</p> */}
      <h2>Counter</h2>
      <button onClick={() => setCount(count-1)}>-</button>
      {count}
      <button onClick={() => setCount(count+1)}>+</button>
{/* 
        <Hello></Hello>
        <Hello></Hello>
        <Hello /> */}
      <StudentForm />
        

    </div>
  )
}

export default App



