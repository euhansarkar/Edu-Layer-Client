import React from "react";

const Course = ({ course }) => {
    const {title, category_id, price, total_enrolled, instructor, image_url, details} = course;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl border border-sky-400">
        <figure>
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.length > 120 ? details.slice(0, 120) : details}</p>
          <div className="card-actions flex items-center justify-between">
            <p>instructor: {instructor.name}</p>
            <p>price: ${price.number}</p>
            <button className="btn btn-primary">enroll now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
