import '../styles/globals.css'
import '../styles/scrollbar.css'

import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";
import { Router } from 'next/router';
import { SessionProvider } from "next-auth/react"
import React, { useCallback , useEffect} from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), []);

   useEffect(() => {
    Router.events.on("routeChangeComplete", resetWindowScrollPosition);

    return () => {
      Router.events.off("routeChangeComplete", resetWindowScrollPosition);
    };
  }, []);

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



