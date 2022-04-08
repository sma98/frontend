import Link from 'next/link'

const TopNav = () => {
  return (
    <nav>
    <div>
        <ul class="flex p-8 bg-gradient-to-tr from-indigo-600 to-purple-600 justify-between">
        <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
          <Link href='/'>Home</Link>
        </li>
        <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
         <Link href='/showtr'>Show trainers</Link> 
          </li>
          <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
          <Link href ='/equipment'>
          Equipments </Link></li>
        
        <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
        <Link href='/addtr'>Add trainers</Link>
        </li>
        <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
        <Link href='/addeq'>Add equipments</Link>
        </li>
       
        <li class="text-md text-white tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
          <Link href='/about'>About</Link>
        </li>
        </ul>
    </div>
    </nav>
  )
}

export default TopNav