export default function About({data}){
  console.log(data);
  return (
    <div className=" text-slate-50">
      {
       data.map((d) => (
        
        <li key={d.id}>{d.id} : {d.title}</li>
        ))
      }
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { data }, // will be passed to the page component as props
  }
}