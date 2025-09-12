import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FoodDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(id);

    return (
        <div className='max-w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={data.image} className='h-96 w-96' alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold mb-4'>{data.name}</h1>
                <p>A timeless Italian classic featuring a hand-tossed thin crust topped with San Marzano tomato sauce, fresh mozzarella di bufala, and fragrant basil leaves. Baked in a wood-fired oven for the perfect char and crispiness. Finished with a drizzle of extra virgin olive oil and a sprinkle of sea salt.</p>
                <p className='text-xl'><span className='font-bold'>Price: </span>$ {data.price}</p>
                <p className='text-xl'><span className='font-bold'>Cuisine: </span>{data.cuisine}</p>
                <p className='text-xl'><span className='font-bold'>Category: </span>{data.category}</p>
            </div>

        </div>
    );
};

export default FoodDetails;