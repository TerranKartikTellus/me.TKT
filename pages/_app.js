import '../styles/globals.css'
import '../styles/scrollbar.css'

import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";

import { SessionProvider } from "next-auth/react"
import React from 'react'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
const router = useRouter();
const ClassNameMain = "relative scroll-smooth m-0 antialiased font-OpenSans  h-screen overflow-x-hidden";
  return (
  <SessionProvider session={session}>
  
   <div className={ router.asPath === '/about' ? "bg-neutral-900"+ClassNameMain : "bg-neutral-900"+ClassNameMain}>  
       <NavBar className="absolute top-0 left-0"/>
         <Component {...pageProps} />
      <Footer />
   </div>
   
  </SessionProvider>
  );
}

export default MyApp



