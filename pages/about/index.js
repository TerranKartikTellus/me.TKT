export default function about({data}){
  console.log(data);

  return (
    <div className="text-gray-100">
      about
    </div>
  );
}

export async function getServerSideProps(){
  const res = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLZPuM9vAbtXs4QAvoONWzN4wuhvAHazvx&maxResults=10&key=AIzaSyCEJ0HhrD58nKkAknhfY4YT1g-JohZW7ts")
  const data = await res.json();
  console.log(data);
  return {
    props: {data},
  }
}

