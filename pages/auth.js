export default function auth(){
          return(
                    <div>
                              auth
                    </div>
          );
}

// // import Head from "next/head"
// // import React from "react";
// // import Link from "next/link";
// // import { useSession, signIn, signOut } from "next-auth/react"



// // export default function Auth(){
// // const { data: session } = useSession()

// // return(<div>
               
// //                     <Head>
// //                                         <title>Terran Kartik Tellus | Auth</title>
// //                                         <meta name="description" content="Generated by create next app" />
// //                                         <link rel="icon" href="/svg/favicon.svg" />
// //                     </Head>
// //                     <main>
// //                     {
// //                       !session && <NotSignIn />
// //                     }
// //                     {
// //                       session && <SignedIn session={session}/>
// //                     }
                      
// //                     </main>
// //           </div>
// //           );
// // }
// // function SignedIn({session}){
// //           return (
// //                       <div className="text-gray-100 text-4xl w-8/12">
// //                             <h1>Signed In as {session.user.email}</h1>
// //                             <button className="ring-2 ring-gray-100 rounded-2xl p-4" onClick={signOut}>Sign Out</button>
// //                       </div>

// //           );
// // }

// // function NotSignIn(){
// //           return(
// //                       <div className="text-gray-100 text-4xl w-8/12">
// //                             <h1>Not Signed In</h1>
// //                             <button className="ring-2 ring-gray-100 rounded-2xl p-4" onClick={signIn}>Sign In</button>
// //                       </div>

// //           );
// // }