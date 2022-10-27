import React from 'react';

const About = () => {
    return (
        <section className='bg-gray-500 text-white'>
          
          <h2 className="text-5xl pt-5 font-bold lg:text-center dark:text-gray-50">
            What Is Our Mission?
          </h2>
          <div className="grid gap-6 my-1 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-400 dark:text-gray-900">
                1
              </div>
              <p className="text-2xl font-semibold">
                what want to make sure learning process is easy
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-400 dark:text-gray-900">
                2
              </div>
              <p className="text-2xl font-semibold">
                EveryOne can learn anything with minimum cost.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-400 dark:text-gray-900">
                3
              </div>
              <p className="text-2xl font-semibold">
                To make sure learning is fun.
              </p>
            </div>
          </div>
        </section>
    );
};

export default About;