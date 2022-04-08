import Profile from '../components/cards/Profile';
import dynamic from 'next/dynamic'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const DynamicComponent = dynamic(() => import('../components/cards/Profile'))
import { useRouter } from "next/router";



// const ContactUs = () => {
//   return (
//     <div>ContactUs</div>
//   )
// }

// 



export default function ContactUs()  {

  const router = useRouter();
const data = router.query;

  const form = useRef();

  function sendEmail (e)  {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template-ulaap1m', form.current, 'pXDOOYw07dZ2mbVyL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
      
  <div class="container mx-auto">
    <div class="mx-auto my-10 max-w-md rounded-md bg-white p-5 shadow-sm">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1>
        <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send us a message.</p>
      </div>
      <div class="m-7">
        <form onSubmit={sendEmail} >
          <div class="mb-6">
            <label for="name" class="mb-2 block text-sm text-gray-600 dark:text-gray-400">Full Name</label>
            <input type="text" name="to_name" id="to_name" placeholder="sadun" required class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" />
          </div>
          <div class="mb-6">
            <label for="name" class="mb-2 block text-sm text-gray-600 dark:text-gray-400">Full Name</label>
            <input type="text" name="from_name" id="from_name" placeholder="sadun" required class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" />
          </div>
          <div class="mb-6"></div>
          <div class="mb-6">
            <label for="email" class="mb-2 block text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <input type="email" readonly name="email" id="email" value={data.emaill} required class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" />
          </div>
          <div class="mb-6">
            <label for="message" class="mb-2 block text-sm text-gray-600 dark:text-gray-400">Your Message</label>

            <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900" required></textarea>
          </div>
          <div class="mb-6">
            <button type="submit" class="w-full rounded-md bg-indigo-500 px-3 py-4 text-white focus:bg-indigo-600 focus:outline-none">Send Message</button>
          </div>
          <p class="text-center text-base text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  </div>

  
  );
};


