import { useRouter } from 'next/router'
import Link from "next/link"
import Head from "next/head"


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
  
const classOnActive = path=="/about"? " font-mono font-black text-black "+" hover:border-l-2 pl-2 hover:border-gray-50 hover:border-opacity-80  scale-95 rotate-0 hover:scale-100 hover:text-lg transition-transform duration-300 ease-in-out opacity-100 uppercase text-opacity-100 text-base md:text-lg  tracking-widest transition-opacity delay-75 duration-300 ease-in-out "
                                    : " font-mono font-black text-white "+" hover:border-l-2 pl-2 hover:border-gray-50 hover:border-opacity-80  scale-95 rotate-0 hover:scale-100 hover:text-lg transition-transform duration-300 ease-in-out opacity-100 uppercase text-opacity-100 text-base md:text-lg  tracking-widest transition-opacity delay-75 duration-300 ease-in-out ";
const classOnInactive = path=="/about"? " text-black "+" hover:border-l-2 pl-2 hover:border-gray-50 hover:border-opacity-80  scale-95  hover:scale-100 hover:text-lg transition-transform duration-300 ease-in-out hover:opacity-100 opacity-50  uppercase text-opacity-90 text-base md:text-sm tracking-wide md:tracking-wide transition-opacity delay-75 duration-300 ease-in-out "
                                      : " text-white "+" hover:border-l-2 pl-2 hover:border-gray-50 hover:border-opacity-80  scale-95  hover:scale-100 hover:text-lg transition-transform duration-300 ease-in-out hover:opacity-100 opacity-50  uppercase text-opacity-90 text-base md:text-sm tracking-wide md:tracking-wide transition-opacity delay-75 duration-300 ease-in-out ";

return (
    <div>
      <ul>
        {
          List.map((item)=>(
            <div key={item.key} className={ item.url === path ? classOnActive : classOnInactive+" "} >
            <Link  href={item.url}><a>{item.name}</a></Link>
            
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
          <div>
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/github.svg"} />  
          </div></a>
        </Link>
    
        <Link href="https://www.instagram.com/grew_up_at__midnight/"><a>
          <div >
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/instagram.svg"} />
          </div></a>
        </Link>
       
        <Link href="mailto:terrankartiktellus@gmail.com"><a>
          <div>
            <img className=" mt-1 w-7 h-7  md:w-8 md:h-8" src={"/svg/google.svg"} />
          </div></a>
        </Link>
        </div>
{/* 
------------------------- */}
        <div className={path == "/about" ? "block" :  "hidden" }>
        <Link href="https://github.com/TerranKartikTellus/"><a>
          <div>
            <img className="invert rounded-full mt-1  w-7 h-7 md:w-8 md:h-8" src={"/svg/github.svg"} />  
          </div></a>
        </Link>
    
        <Link href="https://www.instagram.com/grew_up_at__midnight/"><a>
          <div >
            <img className="invert  mt-1  w-7 h-7 md:w-8 md:h-8" src={"/svg/instagram.svg"} />
          </div></a>
        </Link>
       
        <Link href="mailto:terrankartiktellus@gmail.com"><a>
          <div>
            <img className="invert rounded-full mt-1  w-7 h-7 md:w-9 md:h-9" src={"/svg/google.svg"} />
          </div></a>
        </Link>
        </div>
    
    </div>
  );
}