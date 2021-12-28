import '../styles/globals.css'
import '../styles/scrollbar.css'
import { useEffect, useState } from "react";
import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";



import { SessionProvider } from "next-auth/react"
import React from 'react'
import { useRouter } from 'next/router'
import Scroller from "/components/commonProps/scroller.js"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
const router = useRouter()
const path = router.asPath ;



  return (
  <SessionProvider session={session}>  
         <Scroller >
        <div className={path == "/about" ? " min-w-full w-screen scroll-smooth m-0 antialiased font-OpenSans bg-neutral-100 h-screen overflow-x-hidden " : "  min-w-full w-screen scroll-smooth m-0 antialiased font-OpenSans bg-neutral-900 h-screen overflow-x-hidden "     }> 
             
                 
                           <NavBar ></NavBar>
                    <Component {...pageProps} />
                    <Footer></Footer>
                    
                    
                  
            
        </div>
        </Scroller>
  </SessionProvider>
  );
}
export default MyApp



