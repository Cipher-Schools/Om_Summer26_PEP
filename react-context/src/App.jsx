import { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import GrandParent from './components/GrandParent';

function App() {

  const [email, setEmail] = useState('');
  // const [user, setUser] = useState('Jerry');

  return (
    <>
    <h1>Context Class</h1>
    {/* <Login email={email} setEmail={setEmail} /> */}
    {/* <br /><br />
    <Dashboard email={email} /> */}
    <GrandParent />
    </>
  )
}

export default App
