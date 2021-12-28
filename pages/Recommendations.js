import YoutubeIco from "/components/pages/Recommendations/component/YoutubeIco.js"
import OtherIco from "/components/pages/Recommendations/component/OtherIco.js"
import YoutubeCards from "/components/pages/Recommendations/component/YoutubeCards"
import OtherCards from "/components/pages/Recommendations/component/OtherCards"

import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"

import { useState } from "react"
import Head from "next/head"


const YOUTUBE_PLAYLIST_ITEMS_ENDPOINT = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId= "PLZPuM9vAbtXs4QAvoONWzN4wuhvAHazvx";
const results = 17;
const url = YOUTUBE_PLAYLIST_ITEMS_ENDPOINT+"?part=snippet&playlistId="+playlistId+"&maxResults="+results+"&key="+process.env.GOOGLE_API_KEY;

export async function getServerSideProps(context) {  
  
  const res1 = await fetch(url);
  const YTdata = await res1.json();
  return {
    props: {
      YTdata ,
      },
  }
}

export default function blogPage({YTdata}){

const [state, setstate] = useState("youtube");

          return(
      <section>
          
              <div className="relative z-0 bg-neutral-900  max-w-screen  md:mx-auto lg:w-8/12 md:w-10/12">                                             
                                <Head>
                                  <title>Recommendations | TKT</title>
                                  <link rel="icon" href="/svg/favicon.svg" />
                                  <meta charset="utf-8"/>
                                  <meta name="Description" CONTENT="Author: Kartik, Illustrator: Kartik, Category: Personal Site ,Discuss about thought provoking things found on internet ! , Length: 5 pages"/>
                                  <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
                                  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                                </Head>
                                <div className="max-w-full bg-neutral-900 lg:mt-52 lg:mb-11 mt-36">
                                      <div className="w-screen flex  flex-col ">
                                            <div className="w-screen  flex overflow-x-scroll hide-scroll-bar ">
                                                <div className="w-screen flex justify-start pt-6 pb-14  flex-nowrap  px-32 sm:px-48 md:px-60 lg:px-96">
                                                    <AnimateWhenInView duration={0.3} delay={0.2}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={60} Iy={0} Fy={0} Fx={0} >   
                                                     <div onClick={()=>(setstate("youtube"))} className="hover:scale-105 transition duration-150 ease-in-out cursor-pointer hover: block ">
                                                         <div  className="py-1 px-1 max-w-xs overflow-hidden rounded-lg shadow-lg shadow-red-500/100 hover:shadow-red-500/100 bg-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                                              <YoutubeIco />
                                                         </div>
                                                     </div>
                                                    </AnimateWhenInView>
                                                    <AnimateWhenInView duration={0.3} delay={0.3}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={60} Iy={0} Fy={0} Fx={0} >   
                                                     <div onClick={()=>(setstate("other"))} className="hover:scale-105  cursor-pointer hover: block ml-20 mr-10 shadow-lg shadow-blue-500/100 hover:shadow-blue-500/100  hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                                         <div onClick={()=>(setstate("other"))} className="py-1 px-1 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                                              <OtherIco />
                                                         </div>
                                                     </div>   
                                                    </AnimateWhenInView>
                                                </div>
                                        
                                            </div>
                                      </div>
                                </div>
                                <div className=" bg-neutral-900  ">
                                    <div className="relative z-50"> 
                                           {
                                             state=="youtube" && <YoutubeCards  YTdata={YTdata}  className="" />
                                           }{  
                                             state=="other" && <OtherCards />                                
                                           }
                                    </div>
                                </div>
           </div>
         
      </section>
      
          );
}

