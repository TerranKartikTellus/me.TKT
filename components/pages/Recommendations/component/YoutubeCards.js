
import AnimateWhenInView from "/components/animation/WhenInView/SmallCircularIconAnimation"
import Image from "next/image"
import ReactPlayer from 'react-player'
import Link from "next/link"

// process.env.apiUrl
export async function getStaticProps(context) {  
  const res = await fetch(process.env.apiUrl+"/api/getYtPlaylist");
  const data = await res.json();
      
  return {
    props: {
      data
    },
    revalidate: 21600, // every 6 hr
  }
}

export default function  YoutubeCards(data){
      
   const items= data.YTdata.items;
      
 
  function formatDate(date) {
   var utc = date.toUTCString() // 'ddd, DD MMM YYYY HH:mm:ss GMT'
   return  utc.slice(5, 8) +" "+ utc.slice(8, 12) +" "+ utc.slice(12, 16);
  }

  function formatKind(kind) {
   var utc = kind;
   return  utc.slice(0, 7).toUpperCase();
  }

      return(
      
      <div className="mx-auto">
            <AnimateWhenInView duration={0.4} delay={0.7}  Iopacity={0} Fopacity={1} Is={1} Fs={1} Ix={0} Iy={10} Fy={0} Fx={0} >   
              <div className="text-slate-100 text-lg font-medium tracking-wider text-center mt-5 mb-8">A Humbling and Character-Building experience </div>
            </AnimateWhenInView>
      
      
            <List items={items}></List>
           
      </div>
      );
}

function List({items}){
 
      return (
      <div className=" text-white sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-2 mx-auto  z-50">  
       
                  {   items ?
                      items.map(item=>(
                        <div className="w-full h-full" key={item.id} >
                              <div className="group-hover:-translate-x-1 z-50 group relative rounded-2xl  w-4/5 sm:w-11/12 max-w-sm h-48 m-2 my-4 mx-auto ">
                                          
                                          <Image  className="hover:scale-105 z-20 brightness-105 transition-transform duration-200 ease-in shadow-2xl   rounded-2xl object-cover " width={item.snippet.thumbnails.medium.width} layout="fill" height={item.snippet.thumbnails.medium.height} priority   alt={item.snippet.title}  quality={100} src={item.snippet.thumbnails.high.url}></Image>
                                          <div className="z-30 group-hover:-translate-x-1 w-96 truncate transition-transform duration-200 ease-in bg-black bg-opacity-40 scale-75 px-3 py-2 absolute top-0 -left-5 font-mono text-lg "> {item.snippet.title}</div>
                                          <div className="z-30 group-hover:-translate-x-1 transition-transform duration-200 ease-in bg-black bg-opacity-30 scale-75 px-3 py-2 absolute bottom-0 left-0 font-mono text-base text-opacity-90"> {item.snippet.videoOwnerChannelTitle}</div>
                                          
                                          <Link className="z-50" href={"https://www.youtube.com/watch?v="+item.snippet.resourceId.videoId}>
                                            <a target={"_blank"} >
                                              <div className="z-50 group-hover:bg-opacity-80  bg-opacity-70 bg-white hover:scale-90 transition-transform duration-150 ease-in scale-75 flex flex-row  absolute bottom-0 right-0   rounded-sm shadow-lg p-1 text-black  font-mono text-base font-black"> 
                                              <div className="z-30 fill-current text-red-600 mr-2 " >
                                                  <svg className="z-30 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                              </div>
                                              <span>Play</span>
                                              </div>
                                            </a>
                                          </Link>
                                          
                              </div>
                        </div>
                      ))
                      : <div className="h-screen w-screen flex justify-center item-center">Loading</div>
                  
                  }
      </div>
      );
}

function PlayYoutube({url}){
  return (
    <div>
      <ReactPlayer
          url={url}
          controls
          loop={true}
          volume={1}
          progressInterval={1000}

      />
    </div>
  );
}