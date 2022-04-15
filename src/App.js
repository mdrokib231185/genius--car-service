import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServicesDetails></ServicesDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
