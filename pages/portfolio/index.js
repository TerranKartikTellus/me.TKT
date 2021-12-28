import { useEffect, useState } from "react";
import Head from "next/head"

export default function Portfolio(){
  return(
    <section>
     
                  <div className="flex items-center text-white my-80 justify-center text-5xl">

                    <Head>
                      <title>Portfolio | Terran</title>
                      <link rel="icon" href="/svg/favicon.svg" />

                      <meta charset="utf-8"/>
                      <meta name="Description" CONTENT="Author: Kartik, Illustrator: Kartik, Category: Personal Site , A few projects i have worked on as a designer, Developer, STEM enthusiast , Length: 5 pages"/>
                      <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>

                      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    </Head>
                    In Progress !
                    <div className="bg-red-500"></div>
                  </div>
     
    </section>
  );
}

