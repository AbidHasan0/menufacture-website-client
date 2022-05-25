
import './App.css';
import Navber from './pages/Home/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import DashBoard from './pages/DashBoard/DashBoard';


function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='productDetails/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }>
        </Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
        </Route>
        <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>

        } />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
