import { useContext } from "react";
import Navbar from "./Navbar";
import { provideContext } from "../utils/Context";
import CoursesCard from "./CoursesCard";
import Footer from "./Footer";

const ManyCourses = () => {
    const [data] = useContext(provideContext);
    console.log(data);

    if (!Array.isArray(data)) {
        // Handle the case when data is not an array
        return <p>Loading courses...</p>;
    }
    
   
    const NavDetail = {
        backGroundColor:"teal-500",
        textColor:"white",
        shadow:true
    }

    return (
        <div  className="overflow-x-hidden w-[100vw]">
            <Navbar NavDetail={NavDetail} />
            <div className="p-10 m-5">
                <h2 className="text-3xl  ml-32 font-bold text-[#293972]">Courses</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-row-2 lg:grid-row-1 gap-10 xl:grid-cols-3 w-[80%] mt-10 mx-auto space-x-4"> 
                    {data.map((course, i) => (
                        <CoursesCard key={i} data={course}/>
                    ))}
                </div>
            </div>
            <Footer/>
            
        </div>
    );
}

export default ManyCourses;
