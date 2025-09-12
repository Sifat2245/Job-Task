import React, { useState } from 'react';

const Foods = ({ food }) => {
    const [quantity, setQuantity] = useState(1);

    const quantityIncrease = () => setQuantity(quantity + 1);
    const quantityDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // Calculate total price based on quantity
    const totalPrice = (food.price * quantity).toFixed(2);

    return (
        <div className="border border-neutral-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white">
            {/* Image */}
            <div className="w-full h-48 flex items-center justify-center mb-4">
                <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Details */}
            <div>
                <h1 className="text-2xl font-bold text-neutral-800 mb-2">{food.name}</h1>

                <div className="flex justify-between text-sm text-neutral-600 mb-3">
                    <p>{food.cuisine}</p>
                    <p>{food.category}</p>
                </div>

                <p className="text-lg font-semibold text-green-600 mb-4">
                    Price: $ {totalPrice}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-3 mb-6">
                    <p className="font-medium">Quantity:</p>
                    <div className="flex items-center border rounded-lg px-3 py-1 gap-4">
                        <button
                            onClick={quantityDecrease}
                            className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            −
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>
                        <button
                            onClick={quantityIncrease}
                            className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Add-ons */}
                <div className="mt-4">
                    <p className="font-bold mb-2">Add-ons:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Extra Sauce
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Extra Sausage
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Thin Crust
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Bell Pepper
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Parmesan Cheese
                        </label>
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                    <button className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Foods;
