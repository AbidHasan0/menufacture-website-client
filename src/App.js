
import './App.css';
import Navber from './pages/Home/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
// import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import DashBoard from './pages/DashBoard/DashBoard';
import MyOrders from './pages/DashBoard/MyOrders';
import MyReview from './pages/DashBoard/MyReview';
import MyProfile from './pages/DashBoard/MyProfile';
import AllOrders from './pages/DashBoard/AllOrders';
import AllUser from './pages/DashBoard/AllUser';
import Blogs from './pages/Home/Blogs';
import NotFound from './pages/Home/Shared/NotFound';
import MyPortfolio from './pages/Home/MyPortfolio';





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
          <Route index element={<MyOrders></MyOrders>}> </Route>
          <Route path='review' element={<MyReview></MyReview>}> </Route>
          <Route path='profile' element={<MyProfile></MyProfile>}> </Route>
          <Route path='orders' element={<AllOrders></AllOrders>}> </Route>
          <Route path='user' element={<AllUser></AllUser>}> </Route>

        </Route>

        <Route path="blogs" element={<Blogs />} />
        <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
