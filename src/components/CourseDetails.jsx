import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer"
import { useContext } from "react";
import { provideContext } from "../utils/Context";
import Navbar from "./Navbar";
import CourseLectures from "./CourseLectures";
import BuyCart from "./BuyCart";

 function CourseDetails() {

    const {id}  = useParams();
 

    let [data] =  useContext(provideContext);

        data = data[id-1];
    console.log(data);

    if (!data) {
        // Handle the case when data is not an array
        return <p className="flex justify-center items-center h-[100vh]">Loading...</p>;
    }
   
    

        const NavDetail = {
            backGroundColor:"white",
            textColor:"black",
            shadow:true
        }
    return (
        <>
        <Navbar NavDetail={NavDetail}/>
        <BuyCart/>
        <CourseLectures/>
        <Footer/>
        </>
    )
}
export  default  CourseDetails;