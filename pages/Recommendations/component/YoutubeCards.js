import SlideVr from "/components/animation/slideVertically";



export default function  YoutubeCards({YTdata}){
      const items=YTdata.items;
      
      return(
      <div>
              <div className="text-slate-100 text-lg font-medium tracking-wider text-center space-y-3">A Humbling and Character-Building experience </div>
                        
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
      {
          items.map(item=>(
            <div key={item.id} className="hover:scale-105 transition duration-200  ease-in-out w-72 md:mx-2 my-4 mx-auto  bg-opacity-40 bg-gradient-to-tr ring-2 ring-transparent hover:ring-gray-100  rounded-xl flex flex-col ">
                  <div className="w-72 "><img className="object-cover  h-40 w-full  items-center rounded-t-xl sm:rounded-l-xl" src={item.snippet.thumbnails.high.url}></img></div>
                  <div className="w-72 rounded-b-xl  bg-slate-100 shadow-lg ">
                        <div className="px-4"><p className="font-semibold text-lg  line-clamp-2">{item.snippet.title}</p> </div>
                        <div className="px-4 transition duration-150 ease-in-out justify-start space-x-3 hover:scale-105"><a className="flex flex-row" href={`https://www.youtube.com/channel/${item.snippet.videoOwnerChannelId}`}><p className="font-medium text-base truncate mb-2 my-auto">From: {item.snippet.videoOwnerChannelTitle}</p><img className=" w-5 h-5 ml-2" src="./svg/share_move_black.svg" /></a>  </div>   
                        <a className="" target="_blank" rel="noreferrer" href={"https://www.youtube.com/watch?v="+item.snippet.resourceId.videoId}>       
                        <div className="mt-20 flex flex-row justify-center rounded-b-xl items-center hover:bg-slate-200 text-slate-100 hover:text-slate-900 transition duration-200 ease-in bg-gray-900">
                              <p className="font-medium text-lg    truncate  tracking-wider text-center">OPEN</p>
                              <div className="fill-current  ml-2">
                                    <svg className=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                              </div>
                        </div>
                        </a>
                  </div>
            </div>
          ))
      }
      
      <SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.1} animateDuration={0.25} initialLocation={-40} animateLocation={0} exitLocation={0}>
      <div className="fixed right-9 scale-95 transition duration-150 ease-linear bottom-8 hover:scale-105 hover:shadow-xl shadow-lg bg-slate-900   rounded-full w-10 h-10 ">
        <svg className="w-10  fill-current text-slate-100  -rotate-90" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </div>
      </SlideVr>
      
      </div>
      </div>
      );
}