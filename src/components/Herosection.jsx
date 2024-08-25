import { useState } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Main = ()=>{

   const [videoActive, setVideoActive] = useState(false);

   const handleVideo = ()=>{
       setVideoActive(!videoActive);
  
   }

   return<>
     <div className={`${videoActive?"flex":"hidden"} fixed left-0 right-0 bottom-0 top-0  justify-center items-center bg-[#000000a7] `}>
         <div className="relative  items-center  w-[80vw] object-cover p-20 ">
         <video className="w-[100%] object-cover shadow rounded-md" src="../videoplayback.mp4" muted loop autoPlay></video>
         <button  onClick={handleVideo} className="text-6xl absolute top-20 right-24">×</button>
         </div>
      </div>


    <div className="flex md:justify-between justify-center px-4 w-full rounded-b-[15.5rem] bg-teal-500 h-[71vh] ">

     
   


     <main className="text-center text-white p-8 flex  justify-center items-center w-[85%] md:w-[50%] flex-col">
        <h1 className="text-4xl font-bold"><span className="text-red-500">Studying</span> Online is now much easier</h1>
        <p className="mt-4">TOTC is an interesting platform that will teach you in a more interactive way</p>
        <div className="mt-8 space-x-4 flex">
          <Link to="/contactus" className="bg-white text-teal-700 px-6 py-3 rounded font-bold hover:bg-gray-100 mb-2 ">Join for free</Link>
          <button onClick={handleVideo} className="hidden sm:block bg-teal-700 text-white px-6 py-3 rounded border border-white hover:bg-teal-600"><FaGooglePlay className="inline-block mr-2" />Watch how it works</button>
        </div>
      </main>

   <div className="md:flex hidden  justify-center items-center w-[50%]">
   <img src="../group1.png"  className="bg-transparent max-h-[34vw] " alt="" />
   </div>
   </div>
  
   </>
}
export default Main;