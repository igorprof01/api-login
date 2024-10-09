import React from 'react';
import Register from "./components/Register.jsx"
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <nav>
            <Link to="/register">Register</Link> |
            <Link to="/login">Login</Link>
        </nav>

        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default App;