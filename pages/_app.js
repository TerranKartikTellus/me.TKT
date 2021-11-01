import '../styles/globals.css'
import NavBar from "/components/commonProps/navbar"

function MyApp({ Component, pageProps }) {
  return (
  <div className="m-0 font-OpenSans bg-neutral-900 h-screen overflow-x-hidden">
    <NavBar />
   <Component {...pageProps} />
  </div>
  );
}

export default MyApp
