import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";
import SideBar from "./SideBar/SideBar";


const Courses = () => {
  const courses = useLoaderData();


  return (
      <div className="flex relative">
      <div>
        <aside className="h-screen sticky top-2">
            {courses.map((course) => (
              <SideBar course={course} key={course._id}></SideBar>
            ))}
        </aside>
      </div>

      <div className="grid md:grid-cols-1 gap-5 m-3">
        {courses.map((course) => (
          <Course course={course} key={course._id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
