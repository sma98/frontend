import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"






const Eqcard = ({ equipmentName, contactnumber, price, description, url }) => {



    return (

        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">



            <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg p-8" src={`http://localhost:1337${url}`} alt="product image"></img>
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{equipmentName}</h3>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">


                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS.{price}</span>
                        <a href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            buy</a>
                        <button type="submit" onClick={() => pay()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )

}












export default Eqcard