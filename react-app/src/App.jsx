import { useEffect, useState } from 'react'
// import './App.css'

function App() {

  // let count = 0;
  let [count, setCount] = useState(0);

  console.log('Outside use Effect');


  useEffect(() => {
    console.log('Inside use Effect');
  }, [])

  function inscreaseCount() {
    // count += 1;
    setCount(count+1);

    // console.log('Count: ', count);
  }

  return (
    <>
      <p>Hello</p>
      <p>Hello World</p>

      <p>Count: {count}</p>
      <button onClick={inscreaseCount}>Inscrease</button>

      <Todo />
      <Greet name="John" />
      <Greet name='Harry' />
    </>
  )
}

export default App


function Todo() {
  return (
    <div>
      <p>Todos</p>
    </div>
  )
}

function Greet(props) {
  return (
    <p>Goodmorning  {props.name}</p>
  )
}
