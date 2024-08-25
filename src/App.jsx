import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ManyCourses from "./components/ManyCourses";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";


const App = () => {
  return (

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/manycourses" element={<ManyCourses/>}/>
      <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
     <Route path="/aboutus" element={<AboutUs/>} />
     <Route path="/contactus" element={<ContactUs/>}/>
     <Route path="/coursedetails/:id/checkout" element={<Checkout/>}/>
    </Routes>
 
  );
};

export default App;
