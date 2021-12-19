const YOUTUBE_PLAYLIST_ITEMS_ENDPOINT = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId= "PLZPuM9vAbtXs4QAvoONWzN4wuhvAHazvx";
const results = 100;
const url = YOUTUBE_PLAYLIST_ITEMS_ENDPOINT+"?part=snippet&playlistId="+playlistId+"&maxResults="+results+"&key="+process.env.GOOGLE_API_KEY;




export default async function handler(req,res){

          try{
                    const get = await fetch(url)
                    const YTdata = await get.json();
                    res.status(200).json(YTdata.items);

          }catch(e){
                    console.log(e);
                    console.log(e);
                    
          }
}

