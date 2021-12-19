import '../styles/globals.css'
import '../styles/scrollbar.css'

import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";

import { SessionProvider } from "next-auth/react"
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
const router = useRouter()
const path = router.asPath ;
  return (
  <SessionProvider session={session}>
          <div className={path == "/about" ? "scroll-smooth m-0 antialiased font-OpenSans bg-neutral-100 h-screen overflow-x-hidden "
                      : "scroll-smooth m-0 antialiased font-OpenSans bg-neutral-900 h-screen overflow-x-hidden "
                      }>  
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </div>
  </SessionProvider>
  );
}
export default MyApp



