import YoutubeIco from "./Recommendations/component/YoutubeIco.js"
import OtherIco from "./Recommendations/component/OtherIco.js"
import YoutubeCards from "./Recommendations/component/YoutubeCards.js"
import OtherCards from "./Recommendations/component/OtherCards.js"
import { AnimatePresence } from "framer-motion"
import SlideHr from "/components/animation/slideHorizontally"

import { useState } from "react"
import Head from "next/head"

const YOUTUBE_PLAYLIST_ITEMS_ENDPOINT = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId= "PLZPuM9vAbtXs4QAvoONWzN4wuhvAHazvx";
const results = 17;
const url = YOUTUBE_PLAYLIST_ITEMS_ENDPOINT+"?part=snippet&playlistId="+playlistId+"&maxResults="+results+"&key="+process.env.GOOGLE_API_KEY;

export async function getServerSideProps(context) {  
  const res = await fetch(url);
  const YTdata = await res.json();
  return {
    props: {
      YTdata
    },
  }
}

export default function blogPage({YTdata}){

const [state, setstate] = useState("youtube");

          return(
                    <div className="bg-gradient-to-b from-slate-900  max-w-screen  md:mx-auto lg:w-8/12 md:w-10/12">
                     
                     <Head>
                            <title>Terran Kartik Tellus | Recommendations</title>
                            <meta name="description" content="Generated by create next app" />
                            <link rel="icon" href="/svg/favicon.svg" />
                      
                         </Head>

                     <div className="max-w-full bg-gray-900">
                        
                        <div className="w-screen flex  flex-col ">
                              <div className="w-screen  flex overflow-x-scroll hide-scroll-bar ">
                                  <div className="w-screen flex justify-start pt-6 pb-14  flex-nowrap  px-32 sm:px-48 md:px-60 lg:px-96">
                                       <div onClick={()=>(setstate("youtube"))} className="hover:scale-105 transition duration-150 ease-in-out cursor-pointer hover: block ">
                                           <div  className="py-1 px-1 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                                <YoutubeIco />
                                           </div>
                                       </div>
                                       <div onClick={()=>(setstate("other"))} className="hover:scale-105 transition duration-150 ease-in-out cursor-pointer hover: block ml-20 mr-10">
                                           <div onClick={()=>(setstate("other"))} className="py-1 px-1 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                                <OtherIco />
                                           </div>
                                       </div>   
                                       
                                  </div>
                              
                              </div>
                        </div>

                    
                    </div>
                    <div className="  ">
                        {
                          state=="youtube" && <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.25} initialLocation={100} animateLocation={0} exitLocation={0}>
                            <AnimatePresence><YoutubeCards YTdata={YTdata} className="" /></AnimatePresence>
                          </SlideHr>

                        }{  
                          state=="other" && <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.25} initialLocation={100} animateLocation={0} exitLocation={-100}>
                            <AnimatePresence><OtherCards /></AnimatePresence>
                         </SlideHr>
                        }
                        </div>
                    </div>
          );
}

