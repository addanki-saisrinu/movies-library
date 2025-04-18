import React, { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function Men() {
    const [menClothing, setMenClothing] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/category/men's clothing`)
            .then(response => response.json())
            .then(menClothing => {
                setMenClothing(menClothing);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    menClothing.map(item => (
                        <div
                            key={item.id}
                            className="bg-white p-4 shadow rounded flex flex-col md:flex-row gap-6 w-full">

                            <div className="flex justify-center items-center md:basis-[300px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain"
                                    style={{ width: "150px", height: "150px" }}
                                />
                            </div>


                            <div className="flex-1">
                                <ul className="sm:list-disc flex flex-col gap-2">
                                    <li>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h2>
                                    </li>
                                    <li>
                                        <p className="text-base sm:text-lg text-gray-600">${item.price}</p>
                                    </li>
                                    <li>
                                        <p className="capitalize text-gray-700">{item.category}</p>
                                    </li>
                                    <li>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </li>
                                    <li className="flex flex-row justify-between max-w-[300px] text-sm sm:text-base">
                                        <p>⭐ {item.rating.rate}</p>
                                        <p>🛒 {item.rating.count}</p>
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

export default Men;