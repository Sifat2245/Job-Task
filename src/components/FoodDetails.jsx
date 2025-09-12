import React from 'react';
import pizza from '../assets/PIZZA.jpg'

const FoodDetails = () => {
    return (
        <div className='max-w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={pizza} className='h-96 w-96' alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold mb-4'>Margherita Pizza</h1>
                <p>A timeless Italian classic featuring a hand-tossed thin crust topped with San Marzano tomato sauce, fresh mozzarella di bufala, and fragrant basil leaves. Baked in a wood-fired oven for the perfect char and crispiness. Finished with a drizzle of extra virgin olive oil and a sprinkle of sea salt.</p>
                <p className='text-xl'><span className='font-bold'>Price: </span>$10.99</p>
                <p className='text-xl'><span className='font-bold'>Cuisine: </span>Italian</p>
                <p className='text-xl'><span className='font-bold'>Category: </span>Main Course</p>
            </div>

        </div>
    );
};

export default FoodDetails;