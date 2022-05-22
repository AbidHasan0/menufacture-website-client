
import './App.css';
import Navber from './pages/Home/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
