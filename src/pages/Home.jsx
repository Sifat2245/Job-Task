import React, { useState } from 'react';
import FoodDetails from '../components/FoodDetails';

const Home = () => {
    fetch('foodItems.js').then(res => res.json()).then(data => setFoods(data))
    const [foods, setFoods] = useState([])
    console.log(foods);
    return (
        <div className='max-w-screen mx-auto py-24'>
            <FoodDetails></FoodDetails>
        </div>
    );
};

export default Home;