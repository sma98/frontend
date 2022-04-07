import '../styles/globals.css';
import Layout from "../components/Layout"
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";
   // import {PAYPAL_CLIENT_ID} from '../components/cards/Eqcard'

function MyApp({ Component, pageProps }) {
  
  return (
    
    <Layout>
    
      <Component {...pageProps} />  
    </Layout>
      
  )
}

export default MyApp
//<PayPalScriptProvider options= {{"client-id": PAYPAL_CLIENT_ID.clientId }}>
//<Component {...pageProps} />
//</PayPalScriptProvider>