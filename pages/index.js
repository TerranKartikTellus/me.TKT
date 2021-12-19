import Head from 'next/head'
import Body from "/components/pages/home/body"

const YOUTUBE_PLAYLIST_ITEMS_ENDPOINT = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId= "PLZPuM9vAbtXs4QAvoONWzN4wuhvAHazvx";
const url = YOUTUBE_PLAYLIST_ITEMS_ENDPOINT+"?part=snippet&playlistId="+playlistId+"&maxResults=5"+"&key="+process.env.GOOGLE_API_KEY;

export default function Home({data}) {
  
  return (
    
    <div className="">
      
      <Head>
        <title>Terran Kartik Tellus | Home</title>
        <link rel="icon" href="/svg/favicon.svg" />
       
        <meta charset="utf-8"/>
        <meta name="Description" CONTENT="Author: Kartik, Illustrator: Kartik, Category: Personal Site , Welcome to my personal site where i discuss my thoughts, life and thought provoking things thanks to internet ! , Length: 5 pages"/>
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>

        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      
      <div className="m-0 font-OpenSans bg-neutral-900 "> 
        <div >{<Body data={data} />}</div>
      </div>
    </div>
  
  )
}

export async function getStaticProps(context) {  
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data
    },
  }
}
