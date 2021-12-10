import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"


export default function Blog({data}){
  const items = data.items;
  
  function formatDate(date) {
   var utc = date.toUTCString() // 'ddd, DD MMM YYYY HH:mm:ss GMT'
   return  utc.slice(17, 22)+" : "+utc.slice(5, 8) +" "+ utc.slice(8, 12) +" "+ utc.slice(12, 16);
  }

  function formatKind(kind) {
   var utc = kind;
   return  utc.slice(0, 7).toUpperCase();
  }

  return(
     <div className="block p-3 pt-5  bg-gray-200">
              <div className="flex flex-row p-5 justify-between">
                        <AnimateWhenInView duration={0.4} delay={0}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={-60} Iy={0} Fy={0} Fx={0} >    
                            <h1 className="tracking-wide  font-OpenSans font-bold text-2xl sm:text-2xl md:text-2xl">Recommendations</h1>
                        </AnimateWhenInView>
                        <AnimateWhenInView delay={0.4} duration={0}>
                            <a href="/Recommendations"><img className="w-8 h-8 scale-95 opacity-95 hover:scale-100 hover:opacity-100 transition duration-150" src="./svg/share_move_black.svg"></img></a>
                        </AnimateWhenInView>
              </div>
             <div className="flex flex-col ">
                   <div className="flex overflow-x-scroll  hide-scroll-bar " >
                     <div className="flex flex-nowrap  "    >
                { 
                  items.map(e=>(

                      <div key={e.id} className="block p-4 scale-95 hover:scale-100 transition duration-200 bg-opacity-95 hover:bg-opacity-100">
                         <AnimateWhenInView duration={0.3} delay={0.1}  Iopacity={0} Fopacity={1} Is={0.7} Fs={1} Ix={60} Iy={10} Fy={0} Fx={0} >    
                       
                         <div
                           className="w-80  max-w-xs overflow-hidden ">

                            
                            
                            <div  className="pb-5 scale-95 mx-auto sm:mx-0 w-full lg:max-w-full  ">
                               <a target="_blank"  className="" href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}`}>
                               <div className="bg-gray-100 bg-opacity-25 rounded-tr-3xl rounded-bl-3xl shadow-md shadow-pink-500/30  p-3 hover:translate-y-1 hover:translate-x-1 transition duration-300 ease-in-out opacity-100 flex flex-col ">

                               <img className="object-cover h-40 w-full rounded-tr-3xl   shadow-md" src={e.snippet.thumbnails.high.url}></img>

                               <div className="h-56  py-7 px-10  bg-gray-900 rounded-bl-3xl  flex flex-col justify-between leading-normal">
                                <div className="mb-8 ">
                                  <p className="text-sm text-gray-100 flex items-center">
                                    <svg className="fill-current text-gray-50 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    <p className="text-sm">{ formatKind(e.kind) }</p>
                                  </p>
                                  <div className="text-gray-50 font-semibold text-lg mb-2 line-clamp-2">{e.snippet.title}</div>

                                </div>
                                <div className="flex items-center">
                                  <img className="w-10 h-10 sm:rounded-none rounded-full mr-4" src={e.snippet.thumbnails.default.url} alt="Avatar of Jonathan Reinink" />
                                  <div className="text-sm">
                                    <p className="text-gray-100 leading-none">{e.snippet.videoOwnerChannelTitle}</p>
                                    <p className="text-gray-50">Last Updated : {formatDate(new Date(e.snippet.publishedAt))}</p>
                                  </div>
                                </div>
                              </div>
                              </div>
                             </a>
                            </div>
                           </div>
                        </AnimateWhenInView>
                       </div>   
                        
                ))}

                
                     </div>
                   </div>
                   
                  </div>
             
    </div>
  );
}
