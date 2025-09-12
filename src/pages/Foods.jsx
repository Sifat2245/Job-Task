import React, { useState } from 'react';
import { Link } from 'react-router';

const Foods = ({ food }) => {
    // console.log(food);


    const [quantity, setQuantity] = useState(0)

    const quantityIncrease = () =>{
       const increase =  quantity + 1
       setQuantity(increase)
    }
    const quantityDecrease = () =>{
       const decrease =  quantity - 1
       setQuantity(decrease)
    }

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

                <div className='flex flex-row gap-4'>
                    <p>quantity :  <div className='p-4 border flex gap-4 rounded-lg w-full text-center'>
                        <button onClick={quantityDecrease}>-</button>
                        <div>{quantity}</div>
                        <button onClick={quantityIncrease}>+</button>
                    </div></p>
                </div>

            </div>
        </div>
    );
};

export default Foods;