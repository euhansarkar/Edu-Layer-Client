import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

export const Routes = createBrowserRouter([
    {
        path: `/`,
        element: <Main></Main>,
        children: [
            {
                path: `/`,
                element: <Home></Home>,
                loader: async() => {
                    return fetch(`https://edulayer.vercel.app/courses`);
                }
            },
            {
                path: `/courses`,
                element: <Courses></Courses>,
                loader: async() => {
                    return fetch(`https://edulayer.vercel.app/courses`);
                }
            },
            {
                path: `/login`,
                element: <Login></Login>
            },
            {
                path: `/register`,
                element: <Register></Register>
            },
            {
                path: `/course/:id`,
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://edulayer.vercel.app/course/${params.id}`)
            },
            {
                path: `/checkout/:id`,
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`https://edulayer.vercel.app/course/${params.id}`)
            },
            {
                path: `/blogs`,
                element: <Blogs></Blogs>
            }
            
        ]
    }
]);