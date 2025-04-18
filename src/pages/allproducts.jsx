import React, { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function AllProducts() {
    const [categories, setProducts] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(categories => setProducts(categories));
    }, []);

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center p-4 bg-gray-700 text-white w-full ">ALL PRODUCTS</h1>
            <div className="flex flex-col gap-6 p-4">
                {
                    categories.map(product => (
                        <div
                            key={product.id}
                            className="bg-white p-4 shadow rounded flex flex-col md:flex-row gap-6 w-full">

                            <div className="flex justify-center items-center md:basis-[300px]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-contain"
                                    style={{ width: "150px", height: "150px" }}
                                />
                            </div>


                            <div className="flex-1">
                                <ul className="sm:list-disc flex flex-col gap-2">
                                    <li>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{product.title}</h2>
                                    </li>
                                    <li>
                                        <p className="text-base sm:text-lg text-gray-600">${product.price}</p>
                                    </li>
                                    <li>
                                        <p className="capitalize text-gray-700">{product.category}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                    </li>
                                    <li className="flex flex-row justify-between max-w-[300px] text-sm sm:text-base">
                                        <p>⭐ {product.rating.rate}</p>
                                        <p>🛒 {product.rating.count}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AllProducts;