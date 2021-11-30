import '../styles/globals.css'
import '../styles/scrollbar.css'

import NavBar from "/components/commonProps/navbar"
import Footer from "/components/commonProps/footer";



function MyApp({ Component, pageProps }) {
  return (
  <div className="m-0 font-OpenSans bg-neutral-900 h-screen overflow-x-hidden">  
       <NavBar />
         <Component {...pageProps} />
      <Footer />
  </div>

  );
}

export default MyApp



