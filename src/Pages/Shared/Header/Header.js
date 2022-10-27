import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 bg-indigo-700 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Item 1</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white font-bold menu-horizontal p-0">
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/courses`}>Courses</Link>
            </li>
            <li>
              <Link to={`/faq`}>FAQ</Link>
            </li>
            <li>
              <Link to={`/blogs`}>BLOGS</Link>
            </li>
            <li>
              <div className="flex items-center justify-center w-full ">
                <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="sr-only" />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user?.uid ? (
            <>
              <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
              <button onClick={handleLogOut}>LogOut</button>
            </>
          ) : (
            <>
              <Link className="btn" to={`/login`}>
                Login
              </Link>
              <Link className="btn" to={`/register`}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
