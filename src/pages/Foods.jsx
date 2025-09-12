import React from 'react';
import { Link } from 'react-router';

const Foods = ({ food }) => {
    console.log(food);
    return (
        <div className='border border-neutral-400 rounded-2xl p-10'>
            <div className=''>
                <img src={food.image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{food.name}</h1>
                <div className='flex justify-between'>
                    <p className='text-sm font-semibold mb-3'>{food.cuisine}</p>
                    <p className='text-sm font-semibold mb-3'>{food.category}</p>
                </div>
                <p className='text-lg font-semibold'>Price: $ {food.price}</p>

                <Link to={`/details-page/${food.id}`} className='px-6 py-2 bg-amber-500 rounded-2xl mt-6 hover:cursor-pointer hover:bg-amber-600 font-bold'>View Details</Link>

            </div>
        </div>
    );
};

export default Foods;