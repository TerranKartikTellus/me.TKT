import Scale from "/components/animation/scale";
import SlideVr from "/components/animation/slideVertically";
import SlideHr from "/components/animation/slideHorizontally";
import { useState } from "react";
import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <div className="mx-auto w-10/12 sm:w-10/12 md:w-8/12 lg:w-6/12 ">
                  <ContactHere />
                </div>
              </div>
              
              <IconLayer />
    </div>
    </div>
  );
}

function ContactHere(){
  return(
     <div className=" p-3 pt-5 md:p-11 ">
              
              <div className="flex scale-90 flex-col md:flex-row justify-center item-center">       
                
                <div className="mx-auto w-full ">
                  <ContactForm />
                </div>
              </div>
              
              <ToastContainer />
    </div>
  );
}





function ContactForm(){

const { register, handleSubmit, watch, formState: { errors } } = useForm();

async function onSubmit(values){
  let conf = {
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_API_URL}/api/sendMail`,
  headers: { 'Content-Type': 'application/json'},
  data: values
}
const scrollToTop=()=> window.scrollTo({top:0,behavior: "smooth"})

  const res = await axios(conf);
  console.log(JSON.stringify(res));

    if(res.status == 200){
      console.log("Successfully Sent Email");
      document.getElementById("theForm").reset();
      toast.success('Message Sent !', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        });
       
    }else{
      console.log("Email Not Sent");
    }
    scrollToTop()
}
return(
    <div className="mt-4 md:mt-0  ">
        <form className="text-gray-50 w-full" id="theForm" onSubmit={handleSubmit(onSubmit)}>
          {/* -------------- */}
          <div className="w-full ">
          
          <input 
           placeholder="Name :"
           name="name" 
           type="text"
           {...register('name', 
              { required: true,
                maxLength: 50
              })
           }  
           className={`ring-1 ring-gray-400 focus:ring-1 focus:ring-lime-200 outline-none w-full md:ml-20 p-2 my-1 text-current placeholder-gray-200 font-semibold bg-gray-900 ${errors.name && "ring-2 ring-red-500 outline-none"}`}
           />
           {errors.name && errors.name.type === "required" && (
            <span role="alert"><br/>Forgot to write your Name !</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span role="alert"><br/>Max length (50) exceeded</span>
          )}
          </div>
            {/* -------------- */}
          <div className="">
          
          <input 
           placeholder="Email :"
           name="email" 
           type="text"
           {...register('email', 
              { required: true,
                maxLength: 50,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })
           }  
           className={`ring-1 ring-gray-400 focus:ring-1 focus:ring-lime-200 outline-none w-full md:ml-20 p-2 my-1 text-current placeholder-gray-200 font-semibold bg-gray-900 ${errors.email && "ring-2 ring-red-500 outline-none"}`}
           />
          {errors.email && errors.email.type === "required" && (
            <span role="alert"><br/>Forgot to write Email !</span>
          )}
          {errors.email && errors.email.type === "maxLength" && (
            <span role="alert"><br/>Max length (50) exceeded</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span role="alert"><br/>Please Enter a valid Email</span>
          )}
         
          </div>
          {/* -------------- */} 
          <div className="">
          
           <textarea 
          placeholder="Message :"
          name="message" 
            type="text"
            {...register('message', 
              { required: true,
                minLength: 10,
                maxLength: 1000
              })
           }  
           className={`ring-1 ring-gray-400 focus:ring-1 focus:ring-lime-200 outline-none w-full md:ml-20 p-2 my-1 text-current placeholder-gray-200 font-semibold bg-gray-900 ${errors.message && "ring-2 ring-red-500 outline-none"}`}
           />
          {errors.message && errors.message.type === "required" && (
            <span role="alert"><br/>Write me a message !</span>
          )}
          {errors.message && errors.message.type === "maxLength" && (
            <span role="alert"><br/>Max length (1000) exceeded</span>
          )}
          {errors.message && errors.message.type === "minLength" && (
            <span role="alert"><br/>Min length (10) exceeded</span>
          )}
           
          </div>
            {/* -------------- */}
          <button className="hover:bg-green-500 transition duration-200 hover:translate-x-1 hover:translate-y-1 md:ml-20 mt-10 bg-slate-100 text-gray-900 font-semibold p-2 w-full"><SendIco/></button>
        </form>
    </div>
  );
}

function SendIco(){
  return (
    <div className="hover:-translate-x-1 transition-transform duration-100 hover:bg-opacity-50 tracking-widest  hover:opacity-80 flex flex-row justify-center items-center space-x-3">
    <h2>Send </h2>
    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
    </div>
    );
}

function IconLayer(){
  const [state, setstate] = useState("");

  return(
<section className="">
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