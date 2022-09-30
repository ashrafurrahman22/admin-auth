import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Home/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Dashboard/Order';
import Service from './Pages/Dashboard/Service';
import Review from './Pages/Dashboard/Review';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import AdminAuth from './Admin-Auth/AdminAuth';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Order/>}></Route>

              <Route element={<AdminAuth/>}>
              <Route path="users" element={<ManageUsers />} />
              </Route>
              
                

            <Route path='servicelist' element={<Service/>}></Route>
            <Route path='review' element={<Review/>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
