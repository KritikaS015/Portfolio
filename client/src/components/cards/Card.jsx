import React, { useState } from 'react'

function Card(props) {

    return (
        <>
            <div>
                <div className=" relative h-[400px]    md:w-auto rounded-2xl sm:m-10 s:m-3  transform transition-transform duration-300 hover:scale-105 ">
                    <img
                        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded"></div>
                    <div className="absolute rounded-md bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">Delba</h1>
                        <p className="mt-2 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p>
                        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold  border-solid border-white border-2 p-1  hover:text-red-700 hover:bg-black rounded text-white transform transition-transform duration-300 hover:scale-105">
                            View Project &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
