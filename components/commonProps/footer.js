import Link from "next/link"
import { useRouter } from 'next/router'


export default function Footer(){
const router = useRouter()
const path = router.asPath ;      
          return(
          <div className="">
                              
        
          <div className=" bottom-0 z-0    my-16 flex md:flex-row md:justify-evenly  flex-col space-y-2 justify-center items-center  w-screen text-xs md:text-sm">
                    <div className="hidden md:block">
                    <div className={path==="/about" ? "  text-neutral-900"+" flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold" 
                    : "  text-gray-300 flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold"}>
                              <a href="terms"><div className="hover:rounded   hover:scale-110 ">Terms   </div></a>                    
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="privacy"><div className="hover:rounded  hover:scale-110 ">Privacy </div></a>                    
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                             
                              <a href="docs"><div className="hover:rounded   hover:scale-110">Docs    </div></a>                    
                    </div>
                    </div>
                    
                    
                    <div className={path==="/about"? "text-neutral-900"+"  font-semibold tracking-wider text-base scale-95 select-none text-center"
                    : "text-white  font-semibold tracking-wider text-base scale-95 select-none text-center"}>
                              <div className="flex flex-row">
                              <div className="text-lg">T</div>
                              <div className="relative flex flex-row">
                                        
                                        <div className={path==="/about"? "block mx-auto invert" : "block mx-auto invert-0" }><Link href="/"><img className="h-7 w-7" src="/svg/myLogo.svg" ></img></Link></div>
                              </div>
                              <div className="text-lg">T</div>
                              </div>
                              <div className="text-sm opacity-75 ">{getYear()}</div>
                                </div>
                    
                    <div className={path === "/about" ? "text-neutral-900"+" flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold"
                              : "text-gray-300 flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold"}>
                              <a href="/contact"><div className=" hover:rounded   hover:scale-110">Contact       </div> </a>
                              <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="/blog"><div className=" hover:rounded   hover:scale-110">Blog             </div> </a>
                              
                              <a href="/about"><div className={ path === "/about" ? "bg-gray-900"+" rounded hover:ring-2 hover:ring-black text-neutral-100 p-3 shadow-xl hover:bg-gray-100 hover:text-gray-900"
                                        :" rounded bg-gray-100 text-black p-3 shadow-xl shadow-neutral-100/20 hover:bg-gray-800 hover:text-gray-200 hover:ring-2 hover:ring-white "}>About</div> </a>             
                    </div>
          </div>
            </div>
          );
}

function getYear(){
var currentTime = new Date()

// returns the month (from 0 to 11)
// var month = currentTime.getMonth() + 1

// returns the day of the month (from 1 to 31)
// var day = currentTime.getDate()

// returns the year (four digits)
var year = currentTime.getFullYear()

return year;
}