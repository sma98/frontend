import React, { useState } from 'react'
import axios from 'axios';



const addeq = ({ token }) => {

    const [name, setName] = useState('')

    const [phone, setPhone] = useState('')
    const [price, setPrice] = useState('')

    const [des, setDes] = useState('')
    //const [image, setImage] = useState('')


    // equipmentName, contactnumber, price, description ,url

    async function addEqData() {

        const eqdata = {
            price: price,
            contactNumber: phone,
            description: des,
            equipmentName: name,

        }





        const formElement = document.querySelector('form');

        formElement.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();

            const formData = new FormData();

            const formElements = formElement.elements;

            const data = {};

            for (let i = 0; i < formElements.length; i++) {
                const currentElement = formElements[i];
                if (!['submit', 'file'].includes(currentElement.type)) {
                    // data[currentElement.name] = currentElement.value;
                } else if (currentElement.type === 'file') {
                    for (let i = 0; i < currentElement.files.length; i++) {
                        const file = currentElement.files[i];

                        formData.append(`files.Image`, file, file.name);
                    }
                }
            }


            formData.append('data', JSON.stringify(eqdata));

            request.open('POST', 'https://sstback.herokuapp.com/api/equipments');

            request.send(formData);
        });





    }


    return (
        <div className="max-w-2xl mx-auto mt-8 flex-grow" >

        <form>
            <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
                <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                    <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">ADD EQUIPMENTS</h1>
                    <div class="space-y-4">
                        <div>
                            <label for="title" class="text-lx font-serif">Equipment Name:</label>
                            <input type="text" onChange={e => setName(e.target.value)} placeholder="title" id="name" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                        </div>
                        <div>
                            <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
                            <input type="text" id="des" onChange={e => setDes(e.target.value)} cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></input >
                        </div>
                        <div>
                            <label for="phone" class="text-lx font-serif">Tele:</label>
                            <input type="text" onChange={e => setPhone(e.target.value)} placeholder="name" id="phone" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                        </div>
                        <div>
                            <label for="empriceail" class="text-lx font-serif">price:</label>
                            <input type="text" onChange={e => setPrice(e.target.value)} placeholder="name" id="price" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                        </div>


                        <div>
                            <label for="image" class="text-lx font-serif">Image:</label>
                            <input type="file" onChange={e => setPrice(e.target.value)} placeholder="name" id="price" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                        </div>


                        <button type="submit" onClick={() => addEqData()} class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}

export default addeq


// export async function getStaticProps() {

//     const TOKEN = process.env.TOKEN;

//     return {
//         props: {
//             token: TOKEN
//         }
//     }
// }