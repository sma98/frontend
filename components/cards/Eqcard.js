import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"






const Eqcard = ({ equipmentName, contactnumber, price, description, url }) => {



    return (



        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
            <div class>

                <img class="rounded-t-lg p-8" src={`https://sstback.herokuapp.com${url}`} alt={`${url}`} />

            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{equipmentName}</h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>{description}</p>
                </div>
                <table class="text-xs my-3">
                    <tbody>
                        <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                            <td class="px-2 py-2">{contactnumber}</td>
                        </tr>
                        <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Price</td>
                            <td class="px-2 py-2">{price}</td>
                        </tr>

                      
                        
                    </tbody></table>

                <div class="text-center my-3">
                    <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" ></a>
               
                </div>

            </div>
        </div>


    )

}












export default Eqcard