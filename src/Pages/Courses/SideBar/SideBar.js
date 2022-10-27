import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({course}) => {
    const {title, _id} = course;
  return (
    <div>
        <div className=" min-h-0 flex overflow-hidden">
          <nav
            aria-label="Sidebar"
            className="hidden lg:block flex-shrink-0 bg-gray-800 overflow-y-auto"
          >
            <div className="relative w-60 flex space-y-2 flex-col px-2 py-[7px]">
              <Link to={`/course/${_id}`} className="text-gray-400 hover:text-red-700">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14">
                </div>
                <div className="text-center text-xs font-normal ">{title}</div>
              </Link>
            </div>
          </nav>
        </div>
    </div>
  );
};

export default SideBar;
