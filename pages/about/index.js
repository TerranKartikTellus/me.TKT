import React from "react";
import Link from "next/link"
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"
import Head from "next/head"

export default function about(){
  return(<div className="mt-0 flex flex-row justify-center lg:max-w-screen-2xl text-gray-100 mx-auto md:mx-28 lg:mx-64">
    <Head>
        <title>Contact | TKT</title>
        <link rel="icon" href="/svg/favicon.svg" />
       
        <meta charset="utf-8"/>
        <meta name="Description" CONTENT="Author: Kartik, Illustrator: Kartik, Category: Personal Site , A few words about my professional life. , Length: 5 pages"/>
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>

        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>

    <About className="" ></About>
  </div>)
}

function CircleGlow(){
  return(
  <div className="animate-wiggle  bg-neutral-900 opacity-50 rounded-full h-40 w-40">
      
  </div>)
}
function About(){
  return(
  
  <div className=" md:relative md:z-20  text-gray-100 hover:ring-2 hover:ring-neutral-200 transition ease-in-out duration-300 ">
    
    <div  className="bg-neutral-800 md:bg-gray-900 ">
    <AboutContent   />
    
    </div>

  </div>
  
  );
}
function NextPage(){
  return (<div className="scale-75 text-center text-base lg:mr-20 "  >

    <div className="flex flex-row justify-end items-center mt-2 ">
      <div className="mt-10 text-lg text-white mb-10 opacity-75 tracking-wide">Checkout my Portfolio  :</div>
      <Link href="/portfolio">
        <a className=" hover:translate-y-1 transition-transform duration-200 ease-in-out ml-12 scale-95 font-extrabold text-xl   bg-gray-50 opacity-100 py-1  w-40 h-10 hover:bg-gray-900 hover:text-gray-50 hover:ring-2 hover:ring-white rounded-lg shadow-md shadow-gray-200/25  text-neutral-900 ">
           <div >View</div>
        </a>
      </Link>
    </div>
  </div>)
}

function AboutContent(){
const [state, setstate] = React.useState("");

  return(
    <div className="flex flex-col    md:p-11 p-6 px-8">
                  
                  <div className=" flex flex-row justify-between">
                        
                        <AnimateWhenInView duration={0.4} delay={0.2}  Iopacity={0} Fopacity={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                            <h1 className="tracking-wide font-semibold text-3xl sm:text-3xl md:text-4xl">About</h1>
                        </AnimateWhenInView >
                      
                  </div>
                  <div className="flex flex-col sm:flex-row sm:mt-8">
                  <div className="mx-auto  transition duration-100">
                    <AnimateWhenInView duration={0.4} delay={0.5}  Iopacity={0} Fopacity={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                    <svg className="w-36 h-44 sm:w-44 sm:h-44 fill-current text-white" xmlns="http://www.w3.org/2000/svg" fill="black" width="30" height="30" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
                    </AnimateWhenInView>
                  </div>
                  <div className=" flex flex-col mt-2 sm:px-11 md:px-7">  
                    <div>
                      <AnimateWhenInView duration={0.4} delay={0.7}  Iopacity={0} Fopacity={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                      <p className="font-semibold text-lg tracking-wide sm:text-xl  text-center ">
                      Hi, I’m Terran.<br/> Nice to meet you.
                      </p>
                      </AnimateWhenInView>
                    </div>
                    <br/>
                    
                    <div className="text-sm tracking-wide text-center">
                      <AnimateWhenInView duration={0.4} delay={0.9}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                      <span>
                      Since beginning my journey as a freelance developer, 
                      I've done remote work for agencies, consulted for startups, and 
                      created digital products for consumer use.
                      I'm quietly confident, naturally curious, and perpetually working on improving
                      my chops one design problem at a time.
                      </span>
                      </AnimateWhenInView>
                    </div>
                  
                  </div>
                  </div>
              <AnimateWhenInView duration={0.4} delay={1}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={0} Iy={0} Fy={0} Fx={0} >
                          <NextPage></NextPage>
              </AnimateWhenInView>  
              
            
              
    </div>
  );
}
