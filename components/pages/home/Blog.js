export default function Blog(){
  return(
     <div className=" p-3 pt-5 md:p-11 bg-gray-200">
              <div className="flex flex-row justify-between">
                        <h1 className="tracking-wide font-semibold text-2xl sm:text-3xl md:text-4xl">Blog</h1>
                        <img className="w-8 h-8" src="./svg/share_move_black.svg"></img>
              </div>
              <div className="relative flex flex-col md:flex-row mt-6 md:mt-10 text-justify text-sm">
                       text
              </div>
              
    </div>
  );
}
