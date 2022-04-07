import React, { useState } from 'react'
import axios from 'axios';



const addtr = ({ token }) => {

	const [name, setName] = useState('')
	const [email, setemail] = useState('')
	const [phone, setPhone] = useState('')
	const [nic, setNic] = useState('')
	const [cid, setCid] = useState('')
	const [des, setDes] = useState('')
	const [image, setImage] = useState('')

	async function addData() {

		const trainerdata = {
			Name: name,
			nic: nic,
			Email: email,
			PhoneNumber: phone,
			Description: des,
			cid: cid,


		}



		/*  const add = await fetch('http://localhost:1337/api/trainers/', {
			  method: 'POST',
			  headers: {
				  'Authorization':  `Bearer ${token}`,
				  'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				  data:trainerdata
			  }),
			  }).then(response => response.json())
			  .then(data => console.log(data));
		  */
		// const data = new FormData()
		// data.append('files', file)
		// //data.append(trainerdata)
		// confirm.log(data)
		// const upl = await axios({
		// 	method:'post',
		// 	url:'http://localhost:1337/api/trainers/',
		// 	data:data 


		// })
		// console.log(Error)
		// console.log
		// console.log(upl)



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


			formData.append('data', JSON.stringify(trainerdata));

			request.open('POST', 'http://localhost:1337/api/trainers/');

			request.send(formData);
		});





	}


	return (
		<div className="max-w-2xl mx-auto mt-8 flex-grow" >

			<form>
				<div className="relative z-0 mb-6 w-full group ">
					<input type="email" onChange={e => setemail(e.target.value)} name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="floating_email" className="absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
				</div>
				<div className="grid xl:grid-cols-2 xl:gap-6">
					<div className="relative z-0 mb-6 w-full group">
						<input type="text" onChange={e => setName(e.target.value)} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
					</div>
					<div className="relative z-0 mb-6 w-full group">
						<input type="text" onChange={e => setNic(e.target.value)} name="floating_NIC" id="floating_NIC" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_NIC" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nic Number</label>
					</div>
				</div>
				<div className="grid xl:grid-cols-2 xl:gap-6">
					<div className="relative z-0 mb-6 w-full group">
						<input type="tel" onChange={e => setPhone(e.target.value)} name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
					</div>
					<div className="relative z-0 mb-6 w-full group">
						<input type="number " onChange={e => setCid(e.target.value)} name="floating_CID" id="floating_CID" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="floating_CIDS" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CID</label>
					</div>
				</div>
				<div className="relative z-0 mb-6 w-full group">
					<input type="text" onChange={e => setDes(e.target.value)} name="floating_des" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="floating_des" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
				</div>








				<div class="flex w-full  items-center justify-center bg-grey-lighter">
					<label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
						<svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
						</svg>
						<span class="mt-2 text-base leading-normal">Select a profile photo</span>
						<input type='file'  class="hidden"    onChange={e => setImage(e.target.value)}  />
					</label>
				</div>


				<button type="submit" onClick={() => addData()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
			</form>
		</div>
	)
}

export default addtr


export async function getStaticProps() {

	const TOKEN = process.env.TOKEN;

	return {
		props: {
			token: TOKEN
		}
	}
}