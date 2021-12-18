import Link from 'next/link'
import {urlInstagram , urlGoogle , urlGithub} from "/config/config"
import { useRouter } from 'next/router'

import SlideHr from "/components/animation/slideHorizontally";

export default function NavBar(){
const router = useRouter();
console.log(router.asPath);
const textWhite =  "scale-105 hover:scale-110 opacity-95 hover:opacity-100 hover:cursor-pointer hover:text-white text-white transition duration-200 text-sm font-bold";
const textNormal = "hover:scale-105 opacity-95 hover:opacity-100  hover:cursor-pointer hover:text-white            transition duration-200 text-xs md:text-sm";

const sideIconCss = "hover:cursor-pointer h-6 w-6 md:h-7 md:w-7";

  return(
    <div className={router.asPath === '/about' ? " z-50  sticky top-0  px-12 py-8  font-OpenSans flex  flex-row justify-between  text-white bg-gradient-to-b from-black via-transparent to-transparent md:bg-opacity-0 md:bg-transparent "
                                              : " z-50  sticky top-0  px-12 py-8  font-OpenSans flex  flex-row justify-between  text-neutral-100 bg-gradient-to-b from-gray-900 to-transparent md:bg-opacity-0 md:bg-transparent " }>
        <div className=" items-start tracking-wider text-slate-400 font-semibold ">
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link passHref  href="/">
             <a><div className={ router.asPath == '/' ? textWhite : textNormal}>HOME</div></a>
           </Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.25} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link passHref onClick={()=>{window.scrollTo(0, 0)}} href="/about">
             <a><div className={ router.asPath == '/about' ? textWhite : textNormal}>ABOUT</div></a>
           </Link>   
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.3} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link passHref onClick={()=>{window.scrollTo(0, 0)}} href="/portfolio">
             <a><div className={ router.asPath == '/work' ? textWhite : textNormal}>Portfolio</div></a>
           </Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.35} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
            <Link passHref  href="/Recommendations" scroll={true}>
              <a><div className={ router.asPath == '/Recommendations' ? textWhite : textNormal}>RECOMMENDATIONS</div></a>
            </Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link passHref onClick={()=>{window.scrollTo(0, 0)}} href="/contact">
             <a><div className={ router.asPath == '/contact' ? textWhite : textNormal }>GET IN TOUCH</div></a>
           </Link>     
          </SlideHr>
        
        </div>
        
    </div>
  );
}