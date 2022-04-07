import Link from "next/link"

const Profile = ({name, nic, email, phone, des, cid, img,url}) => {
  return (
   

    <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer ">
        <div class>
          
           <img class="rounded-t-lg p-8"   src={`http://localhost:1337${url}`} alt="trainer"/>
         
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{des}</p>
            </div>
            <table class="text-xs my-3">
                <tbody>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{phone}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{email}</td>
                </tr>

                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">CID</td>
                    <td class="px-2 py-2">{nic}</td>
                </tr>
                <tr>
                    
                    <td class="px-2 py-2 text-gray-500 font-semibold">CID</td>
                    <td class="px-2 py-2">{cid}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" 
              
                ></a>
                <Link href='/contact'>Contact</Link>
            </div>
        
        </div>
    </div>
    
  )
  
}

export default Profile