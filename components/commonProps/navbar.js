import Link from 'next/link'
import {urlInstagram , urlGoogle , urlGithub} from "/config/config"
import { useRouter } from 'next/router'

import SlideHr from "/components/animation/slideHorizontally";

export default function NavBar(){
const router = useRouter();
const textWhite =  "hover:cursor-pointer hover:text-white text-white transition duration-200 text-sm font-bold";
const textNormal = " hover:cursor-pointer hover:text-white            transition duration-200 text-xs md:text-sm";

const sideIconCss = "hover:cursor-pointer h-6 w-6 md:h-7 md:w-7";

  return(
    <div className="z-0 sticky top-0  px-12 py-8  font-OpenSans flex  flex-row justify-between  text-neutral-100 bg-gradient-to-b from-gray-900 to-transparent md:bg-opacity-0 md:bg-transparent ">
        <div className=" items-start tracking-wider text-slate-400 font-semibold ">
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link href="/"><div className={ router.asPath == '/' ? textWhite : textNormal}>HOME</div></Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.25} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link href="/about"><div className={ router.asPath == '/about' ? textWhite : textNormal}>ABOUT</div></Link>   
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.3} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link href="/portfolio"><div className={ router.asPath == '/work' ? textWhite : textNormal}>Portfolio</div></Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.35} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
            <Link href="/blog"><div className={ router.asPath == '/blog' ? textWhite : textNormal}>BLOG</div></Link> 
          </SlideHr>
          <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={0.5} initialLocation={-30} animateLocation={0} exitLocation={0}>
           <Link href="/contact"><div className={ router.asPath == '/contact' ? textWhite : textNormal }>GET IN TOUCH</div></Link>     
          </SlideHr>
        
        </div>
        <div className="flex flex-col  justify-around  items-center ">
         <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.2} animateDuration={0.5} initialLocation={30} animateLocation={0} exitLocation={0}>  
          <Link href={urlGithub}><div className={sideIconCss}><img src="/svg/github.svg" /></div></Link>
         </SlideHr>
         <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.3} animateDuration={0.5} initialLocation={30} animateLocation={0} exitLocation={0}>
          <Link href={urlInstagram}><div className={sideIconCss}><img src="/svg/instagram.svg" /></div></Link>
         </SlideHr>
         <SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={1} animateDelay={0.4} animateDuration={0.5} initialLocation={30} animateLocation={0} exitLocation={0}>
          <Link href={urlGoogle}><div className={sideIconCss}><img src="/svg/google.svg" /></div></Link>
         </SlideHr>
        </div>
    </div>
  );
}