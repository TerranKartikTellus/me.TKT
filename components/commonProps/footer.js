import Link from "next/link"

export default function footer(){
           
          return(
          <div className="bottom-0 relative border-t-2 border-gray-300 pt-5 my-10 flex md:flex-row md:justify-evenly  flex-col space-y-2 justify-center items-center  w-screen text-xs md:text-sm">
               
                    <div className="text-gray-300 flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold">
                              <a href="terms"><div className="hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110 ">Terms   </div></a>                    
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="privacy"><div className="hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110 ">Privacy </div></a>                    
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="security"><div className="hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110 ">Security</div></a>                              
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="status"><div className="hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110 ">Status  </div></a>                       
                                        <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="docs"><div className="hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110">Docs    </div></a>                    
                    </div>
                    
                    <div className="block md:hidden  "><Link href="/"><img className="h-7 w-7" src="/svg/myLogo.svg" ></img></Link></div>
                    <div className="text-white  font-semibold ">© {getYear()} <span className="underline">TerranKartikTellus</span>, Inc.</div>
                    
                    <div className="text-gray-300 flex flex-row space-x-2 justify-center items-center md:space-x-5 font-OpenSans font-semibold">
                              <a href="/contact"><div className=" hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110">Contact Me       </div> </a>
                              <div className="w-px h-5 mx-2 bg-slate-200"></div>
                              <a href="/blog"><div className=" hover:rounded hover:bg-gray-100 hover:text-black hover:scale-110">Blog             </div> </a>
                              
                              <a href="/about"><div className=" rounded bg-gray-100 text-black p-2 hover:bg-gray-800 hover:text-gray-200">About</div> </a>             
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