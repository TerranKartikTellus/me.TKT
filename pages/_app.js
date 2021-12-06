import '../styles/globals.css'
import '../styles/scrollbar.css'

import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";

import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    
  
  return (
  <SessionProvider session={session}>
  
   <div className="m-0 antialiased font-OpenSans bg-neutral-900 h-screen overflow-x-hidden">  
       <NavBar />
         <Component {...pageProps} />
      <Footer />
   </div>
  
  </SessionProvider>
  );
}

export default MyApp



