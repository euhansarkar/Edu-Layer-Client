import React from "react";
import { Link } from "react-router-dom";
import Course from "../Shared/Course/Course";
import Info from "../Shared/Header/Info";

const Home = () => {
  return (
    <div className="md:mx-8">
      <div>
        <section className="dark:bg-gray-800 bg-sky-200 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-4 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-1 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h2 className="text-4xl capitalize font-bold text-amber-500">
                join in our courses and grow your skills
              </h2>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Build Your Future From Now.
                <br className="hidden md:inline lg:hidden overflow-hidden" />
                Wake up, and run on your destination.
              </p>
              <div className="flex flex-col space-y-8 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  rel="noopener noreferrer"
                  href="/courses"
                  className="px-8 py-3 text-lg font-semibold border border-red-500 hover:bg-red-500 hover:text-white rounded dark:bg-blue-400 dark:text-gray-900"
                >
                  Enroll Now
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="/register"
                  className="px-8 py-3 hover:text-white hover:bg-amber-400 border-amber-400 text-lg font-semibold border rounded dark:border-gray-100"
                >
                  Join With Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://img.freepik.com/free-vector/data-scientist-data-analytics-manager-database-developer-administrator-working-big-data-job-database-developers-careers-big-data-concept_335657-1881.jpg?size=626&ext=jpg"
                alt=""
                className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-gray-500"
              />
            </div>
          </div>
        </section>
      </div>
      <section>
        <div
          className="w-full dark:bg-gray-600 bg-cyan-400"
          style={{
            backgroundImage: new URL(
              "https://source.unsplash.com/random/1280x720"
            ),
          }}
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 mx-auto md:py-28">
            <h1 className="text-3xl antialiased font-bold leading-none text-center md:text-6xl dark:text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-amber-600 dark:bg-blue-400 dark:text-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Info></Info>
    </div>
  );
};

export default Home;
