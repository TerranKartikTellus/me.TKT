import SlideVr from "/components/animation/slideVertically";
import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"



export default function  YoutubeCards({YTdata}){
      const items=YTdata.items;
      
 
  
  function formatDate(date) {
   var utc = date.toUTCString() // 'ddd, DD MMM YYYY HH:mm:ss GMT'
   return  utc.slice(5, 8) +" "+ utc.slice(8, 12) +" "+ utc.slice(12, 16);
  }

  function formatKind(kind) {
   var utc = kind;
   return  utc.slice(0, 7).toUpperCase();
  }

      return(
      <div>
            <AnimateWhenInView duration={0.4} delay={0.7}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={0} Iy={10} Fy={0} Fx={0} >   
              <div className="text-slate-100 text-lg font-medium tracking-wider text-center mt-5 mb-8">A Humbling and Character-Building experience </div>
            </AnimateWhenInView>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {   
          items.map(item=>(
            <div key={item.id} className=" shadow-lg shadow-gray-500/50 hover:shadow-gray-500/100  hover:shadow-2xl  hover:scale-95 transition duration-200  ease-in-out w-72 md:mx-2 my-4 mx-auto  bg-black ring-2 ring-transparent hover:ring-gray-100  rounded-xl ">
                 <AnimateWhenInView className="flex flex-col" duration={0.4} delay={0.1}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={50} Iy={10} Fy={0} Fx={0} >   
                  <div className="w-72 "><img className="object-cover  h-40 w-full  items-center rounded-t-xl sm:rounded-l-xl" src={item.snippet.thumbnails.high.url}></img></div>
                  <div className="w-72 rounded-b-xl  bg-black text-slate-50 shadow-lg ">
                        <div className="mt-3 px-4"><p className="font-semibold text-lg  line-clamp-2">{item.snippet.title}</p> </div>
                        <div className="mt-2 px-4  justify-start space-x-3 "><a className="flex flex-row" href={`https://www.youtube.com/channel/${item.snippet.videoOwnerChannelId}`}><p className="font-medium text-base truncate mb-2 my-auto">From: {item.snippet.videoOwnerChannelTitle}</p><img className=" w-5 h-5 ml-2" src="./svg/share_move_black.svg" /></a>  </div>   
                        <p className="px-4 text-gray-300">Last Updated : {formatDate(new Date(item.snippet.publishedAt))}</p>
                        
                        
                  </div>

                  <div className="justify-end items-end flex flex-row h-20 ">
                        <a className="w-1/2 rounded-b-xl" target="_blank" rel="noreferrer" href={"https://www.youtube.com/watch?v="+item.snippet.resourceId.videoId}>       
                        <div className="flex flex-row bottom-0 rounded-bl-xl justify-center  items-center hover:bg-slate-200 text-slate-100 hover:text-red-500 hover:font-semibold hover:text-xl border-r-2 border-gray-400 hover:border-black transition duration-200 ease-in bg-black">
                              <p className="font-medium text-lg    truncate  tracking-wider text-center">View</p>
                              <div className="fill-current  ml-2">
                                    <svg className=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                              </div>
                        </div>
                        </a>

                        <a className="w-1/2 rounded-b-xl" target="_blank" rel="noreferrer" href={"https://www.youtube.com/playlist?list="+item.snippet.playlistId}>       
                        <div className=" flex flex-row bottom-0 justify-center rounded-br-xl items-center hover:bg-slate-200 text-slate-100 hover:text-red-500 hover:font-semibold hover:text-xl border-l-2 border-gray-400 hover:border-black transition duration-200 ease-in bg-black">
                              <p className="font-medium text-lg    truncate  tracking-wider text-center">Playlist</p>
                              <div className="fill-current  ml-2">
                                    <svg className=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                              </div>
                        </div>
                        </a>
                  </div>
                 </AnimateWhenInView>
            </div>
          ))

          
      }
      {/* <div  className="cursor-pointer hover:bg-slate-50 text-white hover:text-black w-72 rounded-full h-72 p-32 border-2 border-red-500 ring-4 ring-white transition ease-in-out duration-150 ">
      <p className="text-2xl ">More</p>
      </div>
      */}
      
      </div>
      </div>
      );
}