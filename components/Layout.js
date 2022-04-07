import Footer from "./navbar/Footer"
import TopNav from "./navbar/TopNav"

const Layout = ({children}) => {
  return (
    <div>
	<TopNav/>
  <div className='flex '>
          {children}
  </div>
	<Footer/>
    </div>
  )
}

export default Layout
