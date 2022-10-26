import React from 'react';

const Modules = ({module, index}) => {
    return (
        <li className='text-black text-xl bg-sky-300 my-3 rounded pl-3'>
            <h2 className='inline-block mr-3'>Module: {index + 1}</h2>
            {module.module}
        </li>
    );
};

export default Modules;