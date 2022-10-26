import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";
import Info from "../Shared/Header/Info";

const Home = () => {
  const courses = useLoaderData();

  return (
    <div className="md:mx-8">
      <div className="container flex items-center h-[500px]">
        <h2 className="text-7xl font-bold text-amber-500">join our courses and grow your skill</h2>
        <div className="bg-[require('../../assets/home.jpg')] mr-10"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {courses.map((course) => (
          <Course course={course} key={course._id}></Course>
        ))}
      </div>

      <Info></Info>
    </div>
  );
};

export default Home;
