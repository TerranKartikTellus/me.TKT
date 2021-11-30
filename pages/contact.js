import Scale from "/components/animation/scale";
import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";
import { useState } from "react";
import {mySite} from "/config/config.js"



export default function Contact(){
  return(
    <div className="">
     <div className=" md:p-11 ">
              <div className="scale-110 hidden md:block text-center text-gray-100 ">  
               <h1 className="text-2xl font-semibold">Hi Terran here ! <br/></h1>
               <h2 className="opacity-95 font-normal text-xl">Always good to hear from people like you</h2>
               <h3 className="opacity-90 font-normal text-base">I am Looking forward to read from u !</h3>
               
              </div>
              <div className=" flex scale-90 flex-col sm:flex-row justify-center item-center">       
                <img className="opacity-80 lg:scale-50 mx-auto w-2/12 " src="./svg/contactico.svg"></img>
                <div className="mx-auto w-10/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mt-10">
                  <ContactForm />
                </div>
              </div>
              
              <IconLayer />
    </div>
    </div>
  );
}





function ContactForm(){
const [values , setValues] = useState({
  name: "",
  email: "",
  message: ""
});

const updateInput = (e) =>{
  const {name,value} = e.target
  setValues({...values , [name]:value })
}
const submitForm = async (e) => {
  e.preventDefault();
  console.log(values);
}

const [buttonOnClick,setbuttonOnclick] = useState("focus:bg-red-500 uppercase text-sm font-bold tracking-wide bg-gray-300 hover:bg-gray-900 hover:text-gray-100 text-black  p-2 rounded-sm w-full focus:outline-none focus:shadow-outline");



return(
    <div className="lg:scale-90">
          <form  target="_blank"   action="https://formsubmit.co/terrankartiktellus@gmail.com" method="POST">
          <div className="border-b-2 p-6">

          <input type="hidden" name="_next" value={`${mySite}/thanks.js`} />
            <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Hey there ! Really glad to get in touch with you ! I will get back to you in just a moment" />
          
          <div className="text-gray-200">
            <span className="uppercase text-sm  font-bold">Name</span>
            <input onChange={updateInput} className="hover:bg-white-500 text-black w-full bg-gray-300  mt-2 p-2 rounded-sm focus:outline-none focus:shadow-outline"
              type="text" name="name" required placeholder="" ></input>
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm  font-bold text-gray-100">Email</span>
            <input onChange={updateInput} className="hover:bg-white-500 text-black w-full bg-gray-300  mt-2 p-2 rounded-sm focus:outline-none focus:shadow-outline"
              type="email" name="email" />
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-gray-100  font-bold">Message</span>
            <textarea onChange={updateInput} name="message"
              className="hover:bg-white-500  w-full h-32 bg-gray-300 text-gray-900 mt-2 p-2 rounded-sm focus:outline-none focus:shadow-outline"></textarea>
          </div>
          </div>
          <div className="border-2 p-1 mt-5">
            <button type=" submit" 
              className={buttonOnClick}>
              Send Message
            </button>
           
          </div>
         </form>
      </div>
  );
}



function IconLayer(){
  const [state, setstate] = useState("");

  return(
<section className="  ">
                <div className="flex flex-col">
                <div>
                {(state == "Designer")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={-140} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideHr></SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                {(state == "Freelance Developer")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                {(state == "Entrepreneur")           ? 
                  <Scale initialScale={0} animateScale={1} exitScale={0} animateDelay={0.2} animateDuration={0.5} ><SlideVr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={40} animateLocation={0} exitLocation={0}><SlideHr initialOpacity={0} animateOpacity={1} exitOpacity={0} animateDelay={0.2} animateDuration={0.5} initialLocation={140} animateLocation={0} exitLocation={0}>
                  <div className=" text-center"> <h1 className="font-medium">{state}</h1> </div>
                  </SlideHr></SlideVr></Scale>
                                        :
                  <p className="h-3"></p>
                }
                </div>
                <div className=" flex  flex-row justify-around">
                      <div  className="flex flex-col justify-center items-center">
                        <a href="https://www.instagram.com/grew_up_at__midnight/"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/instagram.svg"></img>
                        </a>
                      </div>
                      <div  className="flex flex-col justify-center items-center">
                       <a href="https://mail.google.com/mail/u/0/?fs=1&to=terrankartiktellus@gmail.com&tf=cm&body=Hello%20Mr.%20Terran,"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/google.svg"></img>
                       </a>
                      </div>
                      <div  className="flex flex-col justify-center items-center">
                       <a href="https://github.com/TerranKartikTellus"><img className="hover:cursor-pointer h-6 w-6 md:h-7 md:w-7" src="/svg/github.svg"></img>
                       </a>
                      </div>
              </div>
              </div>
              </section>
  );
}