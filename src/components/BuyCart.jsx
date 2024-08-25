import { useContext } from "react";
import { provideContext } from "../utils/Context";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { FaBuysellads } from "react-icons/fa";

const BuyCart = ()=>{

    const {id}  = useParams();
 

    let [data] =  useContext(provideContext);

        data = data[id-1];
    console.log(data);

    if (!data) {
        // Handle the case when data is not an array
        return <p className="flex justify-center items-center h-[100vh]">Loading...</p>;
    }

    return(
            <div className="w-full h-full">
                <div>
                      
                        {/* cart for buy */}
                        <div className="w-[100vw] h-[70vh]">

                        <video src="../videoplayback (1).mp4" className="h-[100%]  w-full aspect-video object-cover" autoPlay muted loop></video>

                        </div>

                    <div className="flex flex-col md:flex-row justify-center mx-3 items-center w-[90%] md:justify-between">
                        <div className="md:ml-10 w-[85%] md:w-[50%]   relative md:bottom-10 ">
                            <Rating/>
                        </div>
                            <div className=" relative md:bottom-64  border w-[80%] md:w-[50%] lg:w-[30%] shadow hover:scale-105 transition-all bg-white duration-200  p-3 ">
                                <img src={`${data.imageUrl}`} className="w-[100%]" alt="" />
                              <div className="flex justify-between">
                              <p className="font-bold text-xl m-4"> 
                                $4000</p>
                                <Link to={`/coursedetails/${id}/checkout`}
                                    className="px-8  flex items-center  bg-blue-600 font-medium  rounded-[20px] text-center  text-white mt-2 mr-4 mb-2 hover:bg-blue-800 hover:font-bold transition-all duration-200">Buy Now < FaBuysellads className="inline-block"  />
                                </Link>
                              </div>

                                <h2 className="m-2 font-bold text-xl">This Includes:</h2>
                            
                            <p className="m-2 ml-6 text-gray-800 font-medium">✔ No Pre-requisite Required</p>

                            <p className="m-2 ml-6  text-gray-800 font-medium">✔ 50+ hours On-Demand Video</p>

                            <p className="m-2 ml-6 text-gray-800 font-medium">✔ 8 Real World Design Problems (asked by Top Companies)</p>

                            <p className="m-2 ml-6 text-gray-800 font-medium">✔ Live Interview Preparation & mentorship sessions</p>

                            <p className="m-2 ml-6 text-gray-800 font-medium">✔ LIVE Revision && Doubts Class</p>

                            <p className="m-2 ml-6 text-gray-800 font-medium">✔ LLD - Design Patterns [With Examples]</p>

                            <p className="m-2 ml-6 mb-8 text-gray-800 font-medium">✔ with Doubt Assistance</p>
                                </div>
                    </div>
                    
                </div>
            </div>
        )
}
export default BuyCart;