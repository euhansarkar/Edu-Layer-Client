import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modules from './Modules';

const CourseDetails = () => {

    const course = useLoaderData();
    console.log(course);
    const {
        title,
        category_id,
        _id,
        price,
        course_modules,
        total_enrolled,
        instructor,
        image_url,
        details,
      } = course;


    return (
        <div className='mx-10 my-5'>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="object-fill">
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.length > 120 ? details.slice(0, 120) : details}</p>
          <div className="card-actions flex items-center justify-between">
            <div className="flex items-center justify-between">
                <img src={instructor?.img} className="w-14 h-14 mx-2 rounded-full" alt="" />
            <p>instructor: {instructor.name}</p>
            </div>
            <p>price: ${price.number}</p>
              <button className="btn btn-primary">enroll now</button>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <h2 className='font-bold text-3xl'>Course Modules</h2>
        <ul className='mt-8'>
        {
            course_modules.map((module, index) => <Modules key={index} module={module} index={index}></Modules>)
        }
        </ul>
      </div>
    </div>
    );
};

export default CourseDetails;