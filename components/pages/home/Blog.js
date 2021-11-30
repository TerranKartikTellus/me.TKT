
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
                        <h1 className="tracking-wide  font-OpenSans font-bold text-2xl sm:text-2xl md:text-2xl">Recommendations</h1>
                        <img className="w-8 h-8" src="./svg/share_move_black.svg"></img>
              </div>
             <div class="flex flex-col ">
                   <div class="flex overflow-x-scroll  hide-scroll-bar " >
                     <div class="flex flex-nowrap  "    >
                { 
                  items.map(e=>(


                       <div class="block p-4 ">
                         <div
                           class="w-80  max-w-xs overflow-hidden ">

                            
                            
                            <div key={e.id} className="scale-95 mx-auto sm:mx-0 w-full lg:max-w-full  ">
                               <a target="_blank" className="" href={`https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}`}>
                               <div className="   shadow-lg ring-2 ring-gray-500 p-3 hover:translate-y-1 hover:translate-x-1 hover:shadow-xl transition duration-300 ease-in-out opacity-100 flex flex-col ">

                               <img className="rounded-t-md  shadow-md" src={e.snippet.thumbnails.standard.url}></img>

                               <div className="h-64  border-t-2 py-7 px-10 border-gray-100 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                  <p className="text-sm text-gray-100 flex items-center">
                                    <svg className="fill-current text-gray-50 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    { formatKind(e.kind) }
                                  </p>
                                  <div className="text-gray-50 font-bold text-xl mb-2">{e.snippet.title}</div>

                                </div>
                                <div className="flex items-center">
                                  <img className="w-10 h-10 sm:rounded-none rounded-full mr-4" src={e.snippet.thumbnails.standard.url} alt="Avatar of Jonathan Reinink" />
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
                       </div>
                     

                  
                  
                
                ))}
                     </div>
                   </div>
                  </div>
             
              
    </div>
  );
}
