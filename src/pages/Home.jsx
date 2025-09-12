import React, { useEffect, useState } from 'react';
import Foods from './Foods';

const Home = () => {
    useEffect(() => {
        fetch('foodItems.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    const [foods, setFoods] = useState([])
    // console.log(foods);
    return (
        <div className='max-w-screen mx-auto py-24'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Welcome To Our Restaurant</h1>
            </div>
            <div className='max-w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-28'>
                {
                    foods.map(food => <Foods key={food.id} food={food}></Foods>)
                }
            </div>

        </div>
    );
};

export default Home;