import Link from "next/link"
import Script from 'next/script'
export default function Home({ names }) {
  return (

    

      


        <div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100 flex justify-center container mx-auto">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="mb-12 space-y-2 text-center">
              <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600"></span>
              <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">HEALTH IS THE GREATEST WEALTH</h2>
              <p class="lg:w-6/12 lg:mx-auto">“A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.”</p>
            </div>

            <div class="grid gap-12 lg:grid-cols-2">
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img src="https://image.shutterstock.com/image-photo/young-man-has-workout-personal-600w-1674435823.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"></img>
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-2xl font-semibold text-cyan-900">FITNESS INSTRUCTORS</h4>
                      <p class="text-gray-600">Here is our most experinced ,personal instructors and trainers</p>
                    </div>
                    <span><Link class="block w-max text-cyan-600" href='/showtr'> Show trainers</Link> </span>
                  </div>
                </div>
              </div>
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img src="https://image.shutterstock.com/image-photo/free-space-on-wooden-floor-600w-350654219.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"></img>
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-2xl font-semibold text-cyan-900">EQUIPMENTS</h4>
                      <p class="text-gray-600">Our fineset health equipments for your excercises.</p>
                    </div>
                    <Link href='/'> Show courses </Link>
                  </div>
                </div>
              </div>


              <div class="flex flex-wrap items-center justify-center">
              <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl ">
                <img src="https://image.shutterstock.com/image-photo/workout-couple-people-exercise-hard-600w-1951196707.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"></img>
                <div class="sm:w-7/12 pl-0 p-5">
                  <div class="space-y-2">
                    <div class="space-y-4">
                      <h4 class="text-2xl font-semibold text-cyan-900">ONLINE COURSES</h4>
                      <p class="text-gray-600">Here is our most valuable lesson and courses.</p>
                    </div>
                    <Link href='/equipment'> Oline courses </Link>
                  </div>
                </div>
              </div>
              </div>





              
            </div>

            
          </div>
        </div>

      

    
  )

}

