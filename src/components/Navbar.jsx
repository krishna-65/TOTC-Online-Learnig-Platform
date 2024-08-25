import { Link } from "react-router-dom";
import Logo from "./Logo";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import LogoBlack from "./LogoBlack";

const Navbar = ({NavDetail})=>{

  const [hamburgerClicked,setHamburgerClicked] = useState(false);

  const HamburgerClick = ()=>{
      setHamburgerClicked(!hamburgerClicked);
  }

  const handleScroll = ()=>{
        if(hamburgerClicked){
          setHamburgerClicked(false);
        }
  }

  useEffect(()=>{
        window.addEventListener("scroll", handleScroll); 

       return()=> window.removeEventListener("scroll", handleScroll);
       },[hamburgerClicked])
       console.log(NavDetail.textColor);
    return (
        <div>
          <header className={`w-full p-6 flex justify-between md:justify-around items-center   bg-${NavDetail.backGroundColor} `}>
        <div className="text-white font-bold text-2xl ">
          {(NavDetail.textColor=="black")?<LogoBlack/>:<Logo/>}
        </div>
        <nav className={`hidden md:block space-x-6 lg:space-x-14 text-${NavDetail.textColor} `}>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/manycourses" className="hover:underline">Courses</Link>
          <Link to="/contactus" className="hover:underline">Contact us</Link>
    
          <Link to="/aboutus" className="hover:underline">About Us</Link>
          <Link to="/login" className="bg-white text-teal-700 px-6 py-2 rounded-[20px] hover:bg-gray-100">Login</Link>
          <Link to="/register" className="bg-teal-700 text-white px-6 py-2 rounded-[20px] border border-white hover:bg-teal-600">Sign Up</Link>
        </nav>
        < CiMenuBurger onClick={HamburgerClick} className={`md:hidden text-${NavDetail.textColor}  cursor-pointer `}/>
      </header>

       <div className=  {`${hamburgerClicked?"flex":"hidden"}  justify-center`}>
       <div className="bg-white shadow w-[70%] mr-4 ">
        <nav className={` flex flex-col items-center gap-2`}>
          <Link to="/" className="text-xl m-4">Home</Link>
          <hr className="h-[1.7px] opacity-40 w-[80%] bg-black"/>
          <Link to="/manycourses" className="text-xl m-4">Courses</Link>
          <hr className="h-[1.7px] opacity-40 w-[80%] bg-black"/>
          <Link to="/contactus" className="text-xl m-4">Contact us</Link>
          <hr className="h-[1.7px] opacity-40 w-[80%] bg-black"/>
          <Link to="/aboutus" className="text-xl m-4">About Us</Link>
          <hr className="h-[1.7px] opacity-40 w-[80%] bg-black"/>
         <div className="flex gap-4 m-4">
         <Link to="/login" className="bg-white text-teal-700 px-6 py-2 rounded-[20px] hover:bg-gray-100">Login</Link>
         <Link to="/register" className="bg-teal-700 text-white px-6 py-2 rounded-[20px] border border-white hover:bg-teal-600">Sign Up</Link>
         </div>
        </nav>
        </div>
       </div>
        </div>
        
    )
}
export default Navbar;