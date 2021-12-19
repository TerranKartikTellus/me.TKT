import { useRouter } from 'next/router'
import Link from "next/link"
import Head from "next/head"

import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"

                        
const List = [
{"id":0,"name":"Home" ,           "url":"/"},
{"id":1,"name":"about" ,          "url":"/about"},
{"id":2,"name":"portfolio" ,      "url":"/portfolio"},
{"id":3,"name":"recommendations" ,"url":"/Recommendations"},
{"id":4,"name":"get in touch" ,   "url":"/contact"},
]

const ListUrl = ["/","/about","/portfolio","/Recommendations","/contact"]

export default function Navbar(){
const router = useRouter()
const path = router.asPath ;


const nonAstheticClass = " font-extrabold font-OpenSans py-8 sticky top-0 z-0 flex flex-row justify-between px-4 lg:px-20 ";
  return (
    <div className={path == "/about" 
    ? " text-gray-900 bg-gradient-to-b from-slate-50 to-transparent "+nonAstheticClass 
    : " text-gray-200 bg-gradient-to-b from-slate-900 to-transparent "+nonAstheticClass }>
       
      <div><Left  path={path}></Left></div>
      <div><Right path={path}></Right></div>
     
    </div>
  );
}
function Left({path}){
  
  const classOnActive = path=="/about"? "     -translate-x-2 font-mono font-black text-black "+" uppercase text-lg md:text-xl "
  : "     font-mono font-black text-white "+" -translate-x-2 uppercase text-lg ";
const classOnInactive = path=="/about"? "     text-black "+" uppercase text-sm text-opacity-70 "
                                      : "     text-white "+" uppercase text-sm text-opacity-70 ";
const anma = "hover:-translate-x-2  hover:scale-105 transition-transform duration-200 ease-in"
return (
    <div>
      <ul>
        {
          List.map((item)=>(
            <div key={item.key} className={ item.url === path ? classOnActive+anma : classOnInactive+anma} >
            <AnimateWhenInView duration={0.4} delay={0.125*(item.id)/2}  Iopacity={0} Fopacity={1} Ix={-60*(1+0*item.id*2)} Iy={0} Fy={0} Fx={0} >
            <Link  href={item.url}><a>{item.name}</a></Link>
            </AnimateWhenInView>
            </div>
          ))  
        }      
      </ul>
    </div>
  );
}
function Right({path}){
  const IconShow = "block  w-8 h-8 my-1 text-red-500 fill-current text-white scale-100 transition duration-150 opacity-95 hover:opacity-100 hover:scale-105 "
  const IconHidden = "hidden  w-8 h-8 my-1 text-red-500  scale-100 transition duration-150 opacity-95 hover:opacity-100 hover:scale-105 "
  
  return (
    <div className="flex flex-col  justify-around  items-center ">
        <div className={path == "/about" ? "hidden" :  "block" }>
        <Link href="https://github.com/TerranKartikTellus/"><a>
         <AnimateWhenInView duration={0.4} delay={0.3}  Iopacity={0} Fopacity={1} Ix={-60} Iy={0} Fy={0} Fx={0} >
          <div  className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/github.svg"} />  
          </div>
             </AnimateWhenInView>
          </a>
        </Link>
        
        
        <Link href="https://www.instagram.com/grew_up_at__midnight/"><a>
          <AnimateWhenInView duration={0.4} delay={0.4}  Iopacity={0} Fopacity={1} Ix={-60} Iy={0} Fy={0} Fx={0} >
        
          <div  className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/instagram.svg"} />
          </div>
             </AnimateWhenInView>
          </a>
        </Link>
     
      
       <Link href="mailto:terrankartiktellus@gmail.com"><a>
         <AnimateWhenInView duration={0.4} delay={0.5}  Iopacity={0} Fopacity={1} Ix={-60} Iy={0} Fy={0} Fx={0} >
        
          <div className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/google.svg"} />
          </div>
             </AnimateWhenInView>
          </a>

        </Link>
       

        </div>
{/* 
------------------------- */}
        <div className={path == "/about" ? "block" :  "hidden" }>
        <Link href="https://github.com/TerranKartikTellus/"><a>
          <div className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className="invert rounded-full mt-1  w-7 h-7 md:w-8 md:h-8" src={"/svg/github.svg"} />  
          </div></a>
        </Link>
    
        <Link href="https://www.instagram.com/grew_up_at__midnight/"><a>
          <div  className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className="invert  mt-1  w-7 h-7 md:w-8 md:h-8" src={"/svg/instagram.svg"} />
          </div></a>
        </Link>
       
        <Link href="mailto:terrankartiktellus@gmail.com"><a>
          <div className='hover:-translate-x-2 transition-transform duration-200 ease-in'>
            <img className="invert rounded-full mt-1  w-7 h-7 md:w-9 md:h-9" src={"/svg/google.svg"} />
          </div></a>
        </Link>
        </div>
    
    </div>
  );
}