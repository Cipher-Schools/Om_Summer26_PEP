import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={ <Signup />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
