import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Blogs from '../../Pages/Blogs/Blogs';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Register from '../../Pages/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

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
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`https://edulayer.vercel.app/course/${params.id}`)
            },
            {
                path: `/blogs`,
                element: <Blogs></Blogs>
            },
            {
                path: `/about`,
                element: <About></About>
            },
            {
                path: `/faq`,
                element: <Faq></Faq>
            },
            {
                path: `*`,
                element: <NotFound></NotFound>
            }
            
        ]
    }
]);