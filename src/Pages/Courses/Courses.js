import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>this is course page</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {courses.map((course) => (
          <Course course={course} key={course._id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
